export const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",
        {
            cache:"force-cache",
            next:{revalidate:3600}
        }
    );

    return response.json();
}