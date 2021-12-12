// import { navbarHeight } from '../components/Navbar'

import { gql } from 'graphql-request'
import { graphCmsRequest } from '../utils/request'

const Home = ({ about }) => {
  console.log('data', about)
  // mt-${navbarHeight}

  const fullName = `${about.firstName} ${about.lastName}`

  return (
    <div className={`flex flex-col items-center justify-center py-2 h-screen`}>
      <div>Who am I: {fullName}</div>
      <div>{about.title}</div>
      <div>{about.subtitle}</div>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const query = gql`
    query GetAboutsData {
      abouts {
        title
        subtitle
        firstName
        lastName
      }
    }
  `

  const data = await graphCmsRequest().request(query)

  if (!data) return { notFround: true }

  return {
    props: { about: data.abouts[0] },
  }
}
