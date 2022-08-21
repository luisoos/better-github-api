/* Importing packages */
import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';
import website from './assets/website';

/* Declearing app variables */
const app: express.Application = express();
const port: number = 3000;

 
/* Routes */
app.get('/', (req, res) => {
   res.send(website);
});

app.get('/:username/', (req, res) => {
	const username: string = req.params.username;
	
	axios({
		method: "get",
		url: `https://api.github.com/users/${username}`
	}).then(function (response) {
		type Data = {
			[key: string | number | symbol]: any;
		};

		let responseData: Data = response.data, pinned_repos;

		const PageUrl = `https://github.com/${username}`;
		const AxiosInstance = axios.create();

		AxiosInstance.get(PageUrl)
			.then((response: any) => {
				const html = response.data;
				const $ = cheerio.load(html);
				const pinnedRepositories: Array<any> = [];

				$(".js-pinned-items-reorder-container > ol > li").each((i: any, elem: any) => {
					const owner: string | null = $(elem).find(".owner").text();
					const repo: string = $(elem).find(".repo").text();
					const internal_link: string | undefined = $(elem).find("a").attr("href");
					const link: string | undefined = "https://github.com" + $(elem).find("a").attr("href");
					let description: string = $(elem).find(".pinned-item-desc").text().slice(9);
					description = description.slice(0, description.length - 7);
					const language: string | undefined = $(elem).find("[itemprop=programmingLanguage]").text();
					const languageColor: string = $(elem).find(".repo-language-color").css("background-color");
					const stars: number = parseInt(
						$(elem).find('a[href$="/stargazers"]').text().trim()
					);
					const forks: number = parseInt(
						$(elem).find('a[href$="/network/members"]').text().trim()
					);

					pinnedRepositories.push( {
						owner: owner || username,
						repo,
						internal_link,
						link,
						description: description || undefined,
						language: language || undefined,
						languageColor: languageColor || undefined,
						stars: stars || 0,
						forks: forks || 0,
					});
				});

				responseData.pinned_repos = pinnedRepositories;
			
				res.json(responseData);
			})
			.catch(console.error); // Error handling
	})
	.catch(function (error: any) {
		if (error.response.status === 404) {
			res.json({ status: 404, message: "User not found" });
		} else {
			res.json({ status: error.response.status, message: error.response.statusText });
		}
		return;
	});
});

/* Starting server */
app.listen(port, () => {
   console.log(`App listening on: http://localhost:${port}/`);
});