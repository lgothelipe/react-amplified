const config = {
  prod: {
    api: 'apiTest',
    path: '/test',
    enviroment: 'prod'
  },
  test: {
    api: 'apiTest',
    path: '/test',
    enviroment: 'test'
  },
  dev: {
    api: 'apiTest',
    path: '/test',
    enviroment: 'dev'
  }
}

const getCurrentConfig = () => {
  if (process.env.AWS_BRANCH === 'master') return config.prod // Github branch
  if (process.env.AWS_BRANCH === 'test') return config.test // Github branch
  if (process.env.NODE_ENV === 'development') return config.dev // npm start NODE_ENV = 'development'
  return config.prod // return prod default
}

export default getCurrentConfig()