const getComplexPathPrefix = path => `/${path.split('/')[1]}` || path

export const compareNestedPaths = (path, asPath) => path === getComplexPathPrefix(asPath)
