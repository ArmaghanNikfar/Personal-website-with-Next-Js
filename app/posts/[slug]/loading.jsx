"use client"

import { CircularProgress } from "@material-ui/core"

const Loading = () =>{
    return(
        <section className="py-24">
            <div className="container">
                <CircularProgress/>
            </div>
        </section>
    )
}
export default Loading;