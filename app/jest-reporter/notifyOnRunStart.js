const request = require('graphql-request').request
const configs = require('./jest-reporter-config.js')

const query = `
  mutation onRunStart($data: onRunStartMutationInput!) {
    onRunStart(data:$data){
      success
    }
  }
`

module.exports = function (onRunStartMutationInput) {
  request(configs.graphQLEndpoint, query, {
    data: onRunStartMutationInput,
  }).then((data) => console.log(data))
}
