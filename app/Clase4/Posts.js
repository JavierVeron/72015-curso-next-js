import { getPosts } from "./getPosts";

const Posts = async () => {
    const posts = await getPosts();    

    return (
        <div className="container m-auto flex flex-col my-10">
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Posts:</h2>
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                {
                    posts.map(item => (
                        <li key={item.id} className="flex items-center space-x-3 rtl:space-x-reverse">
                            <svg className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                            <span>{item.title}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Posts