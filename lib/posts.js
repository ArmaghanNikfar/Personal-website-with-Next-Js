import path from "path";
import {compileMDX} from 'next-mdx-remote/rsc'
import fs from 'fs'
import NewsLetter from "../app/components/Newsletter/page";

const rootDirectory = path.join(process.cwd(), 'content')
const components = {
    h1: props => (
        <h1 {...props} className='text-emerald-400'>
            {props.children}
        </h1>
    ),
    Newsletter: NewsLetter
}

export async function getPostsBySlug(slug){
    const realSlug = slug.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
    const fileContent = fs.readFileSync(filePath, {encoding: 'utf8'})

    const {content, frontmatter} = await compileMDX({
        source: fileContent,
        components,
        options:{
            parseFrontmatter:true
        }
    })
    return {content , frontmatter , slug:realSlug}
}
export async function getAllPosts (){
    const files = fs.readdirSync(rootDirectory)
    let Posts = []

    for(const file of files){
        const post = await getPostsBySlug(file)
        Posts.push(post)
    }
    await wait(2000)
    return Posts
}
// to delay whatover ms that passed to this component
export async function wait(ms){
return new Promise(resolve => setTimeout(resolve , ms))}