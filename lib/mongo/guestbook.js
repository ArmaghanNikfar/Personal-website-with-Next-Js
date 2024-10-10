import clientPromise from "./client";

let client
let db
let guestbook

async function init(){
    if(db) return
    try{
        client = await clientPromise
        db = await client.db()
        guestbook = await db.collection('guestbook')
    } catch(error){
        throw new Error('failed to connect to database.')
    }
}
(async () =>{
    await init()
})()

export const getGuestbookEntries = async () =>{
    try{
        if(!guestbook) await init()
        console.log('fetching entries...')
        const entries = await guestbook
        .find({})
        .map(entry => ({...entry, _id:entry._id.toString()}))
        .toArray()
        return {entries}
    } catch(error){
        return { error:'failed to fetch guestbook.'}
    }
}
export const createGuestbookEntry = async({name,message}) =>{
    try{
        if(!guestbook) await init()
        return await guestbook.insertOne({name,message,updateAt: new Date()})
      
    } catch(error){
        return{error : 'Failed to create entry!'}
    }
}