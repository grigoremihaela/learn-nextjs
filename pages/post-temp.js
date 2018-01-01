import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const PostTemp =  (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={props.show.image.medium}/>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch("https://pi-temp-api.herokuapp.com/get/temperature")
  const show = await res.json()

  console.log(`Temp: ${show.name}`)

  return { show }
}

export default PostTemp