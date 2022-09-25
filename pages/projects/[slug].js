import { getProjectByProjectName, getProjects } from '../../queries/projects'
import { graphCmsRequest } from '../../utils/request'

export const getStaticPaths = async () => {
  const data = await graphCmsRequest().request(getProjects)

  if (!data) return { notFound: true }

  const paths = data.projects.map(project => ({
    params: {
      slug: project.projectName,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async context => {
  const projectName = context.params.slug
  const data = await graphCmsRequest().request(getProjectByProjectName(projectName))

  if (!data) return { notFound: true }

  return {
    props: { project: data.project },
  }
}

const Project = ({ project }) => {
  console.log('project', project)
  return (
    <div className="flex flex-col items-center p-2">
      <h1 className="font-bold text-2xl">{project.title}</h1>
    </div>
  )
}

export default Project
