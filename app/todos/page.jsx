
async function getTodos(){
   const res = await fetch('https://jsonplaceholder.typicode.com/todos',{
          cache:'no-store'}) //react cache for not caching the response
   if (!res.ok) throw new Error('Failed to fetch')

   return res.json()
}

import React, { cache } from 'react'

const Page = async () => {
    const todos = await getTodos()
  return (
    <section className='py-4'>
        <div className='main'>
        <div className='container'>
            <div className='text-3xl font-bold'>Todo List</div>
            <ul className='mt-6 flex flex-col gap-3'>
                {todos.slice(0,10).map(todo=>(
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
        </div>
        </section>
  )
}

export default Page