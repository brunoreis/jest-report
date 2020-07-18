const request = require('graphql-request').request
const configs = require('./jest-reporter-config.js')

const query = `
  mutation onTestStart($data: onTestStartMutationInput!) {
    onTestStart(data:$data){
      success
    }
  }
`

module.exports = function (onTestStartMutationInput) {
  console.log('onTestStartMutationInput', onTestStartMutationInput)
  request(configs.graphQLEndpoint, query, {
    data: onTestStartMutationInput,
  }).then((data) => console.log(data))
}
