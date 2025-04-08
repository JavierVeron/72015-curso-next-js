const PostsAPI = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return (
        <div className="container m-auto flex border-1">
            <ul className="list-disc">
                {
                    posts.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
        </div>

    )
}

export default PostsAPI