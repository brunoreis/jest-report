const request = require('graphql-request').request
const configs = require('./jest-reporter-config.js')

const query = `
  mutation onTestResult($data: onTestResultMutationInput!) {
    onTestResult(data:$data){
      success
    }
  }
`

module.exports = function (onTestResultMutationInput) {
  request(configs.graphQLEndpoint, query, {
    data: onTestResultMutationInput,
  }).then((data) => console.log(data))
}
