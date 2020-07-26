const request = require('graphql-request').request
const configs = require('./jest-reporter-config.js')

const query = `
  mutation onRunComplete($data: onRunCompleteMutationInput!) {
    onRunComplete(data:$data){
      success
    }
  }
`

module.exports = function (onRunCompleteMutationInput) {
  request(configs.graphQLEndpoint, query, {
    data: onRunCompleteMutationInput,
  })
}
