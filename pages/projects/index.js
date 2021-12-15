import { gql } from 'graphql-request'
import { graphCmsRequest } from '../../utils/request'
import { fullPageHeight } from '../index'

const Projects = ({ projects }) => {
  console.log('projects', projects)

  return (
    <div style={fullPageHeight}>
      <h1>Projects</h1>

      <div className="flex flex-col items-center p-2">
        {projects.length ? (
          projects.map(project => (
            <div key={project.id} className="m-2 border-2 rounded-md w-96 p-3">
              <p>{project.title}</p>
              <p>{project.projectName}</p>
              <p>{project.startDate}</p>
            </div>
          ))
        ) : (
          <div>No projects to display</div>
        )}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const query = gql`
    query GetProjectsData {
      projects(stage: ${process.env.NODE_ENV === 'development' ? 'DRAFT' : 'PUBLISHED'}) {
        id
        title
        about
        projectName
        startDate
        endDate
      }
    }
  `

  const data = await graphCmsRequest().request(query)

  if (!data) return { notFound: true }

  return {
    props: { projects: data.projects },
    revalidate: process.env.NODE_ENV === 'development' ? 1 : 30,
  }
}

export default Projects
