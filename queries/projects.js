import { gql } from 'graphql-request'

import { isDevelopment } from '../utils/environment'

export const getProjects = gql`
  query GetProjectsData {
    projects(stage: ${isDevelopment ? 'DRAFT' : 'PUBLISHED'}) {
      id
      title
      about
      projectName
      startDate
      endDate
    }
  }
`

export const getProjectByProjectName = projectName => gql`
  query GetProjectData {
    project(stage: ${
      isDevelopment ? 'DRAFT' : 'PUBLISHED'
    }, where: { projectName: "${projectName}" }) {
      id
      title
      about
      projectName
      startDate
      endDate
    }
  }
`
