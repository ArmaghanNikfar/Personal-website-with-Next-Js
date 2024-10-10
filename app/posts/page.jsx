import { getAllPosts, wait } from "../../lib/posts";
import Link from "next/link";
import PageViews from "../components/ui/Pageview";
import { Suspense } from "react";

const Page = async() =>{
    await wait(2000)
    const Posts = await getAllPosts()
    return  ( 
    <section >
          <Suspense fallback={<div>Loading Post's ... </div>}>
        <div className="main">
            <div className='container'>
            <h1 className='text-3xl font-bold'>All Posts</h1>
            <ul className='mt-12'>
                {Posts.map(post =>(
                    <li key={post.slug}>
                        <Link href={`/posts/${post.slug}`}>
                        <div className="border-b border-gray-200 py-3 transition-transform hover:scale-[1.01] dark:border-gray-700">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex h-10 w-12 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400">{post.frontmatter?.number}</div>
                    <div className="flex w-full flex-col gap-x-6 gap-y-1 sm:flex-row sm:items-center sm:justify-between">
                          <h4 className='text-lg font-medium'>{post.frontmatter?.title}</h4>
                          <p className='text-sm text-gray-500'>
                            {post.frontmatter?.author}
                          </p>
                          </div>
                          </div>
                          </div>
                            </Link>
                    </li>
                ))}
                {/* we use Suspense for showing loading for this component */}
              
                
              
            </ul>
            </div>
            </div>
            </Suspense>
        </section>
    )
}
export default Page;