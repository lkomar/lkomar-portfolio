import { gql } from 'graphql-request'
import { footerHeight } from '../components/Footer'
import { navbarHeight } from '../components/Navbar'
import { graphCmsRequest } from '../utils/request'

export const fullPageHeight = { minHeight: `calc(100vh - ${navbarHeight + footerHeight}px)` }

const Home = ({ about }) => {
  console.log('data', about)

  const fullName = `${about.firstName} ${about.lastName}`

  return (
    <div className="flex flex-col items-center justify-center py-2" style={fullPageHeight}>
      <div>Who am I: {fullName}</div>
      <div>{about.title}</div>
      <div>{about.subtitle}</div>
    </div>
  )
}

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
    revalidate: process.env.NODE_ENV === 'development' ? 1 : 10,
  }
}

export default Home
