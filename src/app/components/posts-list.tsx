import Link from "next/link";

type Post = {
    id: string;
    title: string;
};

type Response = {
    posts: Post[];
};

export default async function PostsList() {
    // to se the loading page at the same level of the route
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch("https://dummyjson.com/posts?limit=10");
    const data: Response = await response.json();
    
   return(<ul> 
    {
        data.posts.map(post => (
            <li key={post.id} className="mb-3">
                <Link href={`/posts/${post.id}`} className="text-2xl font-semibold">{post.title}</Link>
            </li>
        ))
    }

  </ul>)
}