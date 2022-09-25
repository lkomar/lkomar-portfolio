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
            <Link href={`/projects/${project.projectName}`} key={project.id}>
              <a className="m-2 border-2 rounded-md w-96 p-3 hover:border-cyan-400">
                <p>{project.title}</p>
                <p>{project.projectName}</p>
                <p>{project.about}</p>
                <p>{project.description}</p>
                <p>{project.startDate}</p>
              </a>
            </Link>
          ))
        ) : (
          <div>No projects to display</div>
        )}
      </div>
    </div>
  )
}

export default Projects
