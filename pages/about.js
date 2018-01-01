import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
      <p>This is the about page</p>
    </Layout>
)

/*
import withLayout from '../lib/layout'

const Page = () => (
  <p>This is the about page</p>
)

export default withLayout(Page)
*/
/*
const Page = () => (
  <p>This is the about page</p>
)

export default () => (<Layout page={Page}/>)
*/
/*
const content = (<p>This is the about page</p>)

export default () => (<Layout content={content}/>)
*/