import Link from 'next/link'

import { graphCmsRequest } from '../../utils/request'
import { fullPageHeight } from '../index'
import { isDevelopment } from '../../utils/environment'
import { getProjects } from '../../queries/projects'

export const getStaticProps = async () => {
  const data = await graphCmsRequest().request(getProjects)

  if (!data) return { notFound: true }

  return {
    props: { projects: data.projects },
    revalidate: isDevelopment ? 1 : 30,
  }
}

const Projects = ({ projects }) => {
  return (
    <div style={fullPageHeight}>
      <h1>Projects</h1>

      <div className="flex flex-col items-center p-2">
        {projects.length ? (
          projects.map(project => (
            <div key={project.id} className="m-2 border-2 rounded-md w-96 p-3">
              <p>{project.title}</p>
              <p>{project.about}</p>
              <p>{project.projectName}</p>
              <p>{project.description}</p>
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

export default Projects
