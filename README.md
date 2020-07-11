start the test server
`yarn dev`

start the test client
`yarn dev`

run the tests in the app
`yarn test`

The tests app declares a test reporter in jest.config.js:
`reporters: ['<rootDir>/jest-reporter/jest-reporter.js'],`

Then `/app/jest-reporter.js` redirects the events to the server by calling the mutations there as you can check on `notifyOnTestResult`.

The server exposes subscriptions to the clients that want to be notified. The clients will subscribe to those. So when the mutations are called on the server they notify the subscribed client(s).
