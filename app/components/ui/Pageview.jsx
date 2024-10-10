import {wait} from '../../../lib/posts'

const PageViews =  async ({slug}) =>{
    await wait(2000)
    return (
        <div>PageViews</div>
    )
}
export default PageViews