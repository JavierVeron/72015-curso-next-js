export const getPostById = async ({id}) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id,
        {
            next:{revalidate:0}
        }
    );

    return response.json();
}