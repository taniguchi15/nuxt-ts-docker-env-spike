import local from './local'
import docker from './docker'
import stg from './stg'
import pro from './pro'

const env = process.env.NODE_ENV

export default (() => {
  switch (env) {
    case 'local':
      return local
    case 'docker':
      return docker
    case 'stg':
      return stg
    case 'pro':
      return pro
    default:
      return local
  }
})()