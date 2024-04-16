const query = `
    query GetUserArticles($page: Int!) {
        user(username: "BlakeYeboah") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                }
            }
        }
    }
`;
const variables = { page: 0 };

async function fetchData() {
    const res = await fetch("https://api.hashnode.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });
    return res.json();
}

fetchData().then((result) => {
    console.log(result.data.user.publication.posts);
});


