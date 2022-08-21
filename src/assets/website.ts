const website = `<!DOCTYPE HTML>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Better GitHub API</title>

    <meta property="og:title" content="Luis | Portfolio">
    <meta property="og:site_name" content="Home">
    <meta property="og:url" content="https://luisoos.github.io/mysite">
    <meta property="og:description" content="Luis is a UI / UX designer, frontend developer and programmer. You can find anything about him in this Portfolio.">
    <meta property="og:type" content="website">

    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
</head>

<style>
* {
    box-sizing: border-box;

    overflow-x: hidden;
}

html,
body {
    margin: 0;

    font-family: 'Inter', sans-serif;

    background: #ffffff;
    color: #060707;
}

.main {
    width: 750px;

    margin-left: auto;
    margin-right: auto;
}

@media screen and (max-width: 800px) {

    .main {
        width: 90%;
    }

}

label {
    transform: translateY(10px);
}
</style>

<body>
    <div class="main mb-24 pt-10">
        <div class="flex mb-5">
            <a href="https://github.com/luisoos" target="_blank" class="pr-2 transition ease-in-out text-gray-700 hover:text-gray-800">github@luisoos</a>
            <a href="https://github.com/luisoos/better-github-api" target="_blank" class="pl-2 transition ease-in-out text-gray-700 hover:text-gray-800">Source Code</a>
        </div>

        <h1 class="text-3xl font-extrabold tracking-tight md:tracking-tighter">
            Better GitHub API
        </h1>

        <p class="mt-1 mb-1"><code>GET /username</code> returns the user's profile and pinned repositories.</p>
        
        <label for="username" class="form-label inline-block mb-2 text-gray-700">Username</label>
        <div class="sm:flex">
            <input type="text" class="mr-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-gray-400 focus:bg-white focus:outline-none" name="url" id="username">
            <button type="submit" class="mt-2 sm:mt-0 py-0.5 px-5 border border-solid border-gray-300 rounded transition ease-in-out m-0 hover:text-gray-700 hover:border-gray-400" onclick="submit()"> Go! </button>
        </div>
        
        <details class="mt-5">
            <summary class="cursor-pointer"> <strong> Response Schema </strong> </summary>
            <pre><code>
{
    "login": string,
    "id": number,
    "node_id": string,
    "avatar_url": string,
    "gravatar_id": string,
    "url": string,
    "html_url": string,
    "followers_url": string,
    "following_url": string,
    "gists_url": string,
    "starred_url": string,
    "subscriptions_url": string,
    "organizations_url": string,
    "repos_url": string,
    "events_url": string,
    "received_events_url": string,
    "type": string,
    "site_admin": boolean,
    "name": string,
    "company": string,
    "blog": string,
    "location": string,
    "email": string,
    "hireable": boolean,
    "bio": string,
    "twitter_username": string,
    "public_repos": number,
    "public_gists": number,
    "followers": number,
    "following": number,
    "created_at": string,
    "updated_at": string,
    "pinned_repos": Array [
        { 
            "owner": string,
            "repo": string,
            "internal_link": string,
            "link": string,
            "description": string,
            "language": string,
            "languageColor": string,
            "stars": number,
            "forks": number
        }
        ...
    ]
}
            </code></pre>
        </details>
    </div>
</body>

<script>
    function submit() {
        const url = document.getElementById("username").value;
        window.location.href = url;
    }
</script>

</html>`;

export default website;