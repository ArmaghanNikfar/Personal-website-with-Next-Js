import Image from "next/image";
import { getPostsBySlug } from "../../../lib/posts";
import nextJsImage from '../../../public/images/next-JS-framework.png'
const Page = async ({params}) => {
    const {slug} = params

    const{content, frontmatter} = await getPostsBySlug(slug)

    return(
        <section >
            <div className='container'>
                <div className="main">
                    <Image src={nextJsImage} alt="nextJs" />
                <header className='rounded bg-gray-100 p-8'>
                    <h1 className='font-serif text-3xl'>{frontmatter.title}</h1>
                    <p>{frontmatter.author}</p>
                </header>
                <main className='prose mt-12'>{content}</main>
                <a className="mt-4 text-bold" href='https://www.hamedbahram.io/courses' target="_blank">
                    <p  className="mt-4 text-blue">visit this course</p>
                </a>

            </div>
            </div>
        </section>
    )
}
export default Page;