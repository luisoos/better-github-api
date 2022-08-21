# Better GitHub API

Better GitHub API delivers basic information about a user and their pinned repositories to you. ✨

Programmed in TypeScript using [`ts-node`](https://www.npmjs.com/package/ts-node) and fetching content using [`axios`](https://www.npmjs.com/package/axios) it delivers content blazingly fast! 🚀✨

## Usage

### Route

`GET /:username` returns the user's profile and pinned repositories.

<details>
    <summary> <strong> Response Schema </strong> </summary>
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

### Possible errors

#### 404 - User not found
```json
{ 
    "status": 404, 
    "message": "User not found" 
}
```

#### Custom error schema
```json
{ 
    "status": "error.response.status", 
    "message": "error.response.statusText" 
}
```

## Installation

```bash
npm install
```

```bash
npm run start
```

> A web server should be running on [`http://localhost:3000/`](http://localhost:3000/).
