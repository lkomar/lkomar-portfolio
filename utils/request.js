import { GraphQLClient } from 'graphql-request'

export const graphCmsRequest = endpoint => {
  const requestEndpoint = endpoint || process.env.GRAPHCMS_ENDPOINT

  const graphQLClient = new GraphQLClient(requestEndpoint, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  })

  return graphQLClient
}
