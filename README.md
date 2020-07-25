

![shell and web runs](https://user-images.githubusercontent.com/217240/88461498-64c22b00-ce7a-11ea-8ea2-a530e7bdac9e.png)

Scope
---

Web report for automated tests using jest focused on showing clean results, easy to navigate, and quick keyboard access to the test code and code under test. 

Vision
---

TDD is the best tool I know to code whithout needing to keep big chunks of info in my own ram memory. I'm constantly looking at test results, copying data from them, and following "links" to files from the stacks there. The usual jest report is a big text in the shell for each test run. The information there is not visually indexed and hard to be quick scanned. 

This is a tool to show jest results on the browser. Initially it will show each run sequentially in the page. That will be a great time saver for a usual tdd flow. In a second iteration, it will consolidate multiple runs into one report, helping even more. A lot of nice interactions will be added to allow a quick keyboar navigation through the results.


How to Run it / Quick architectural overview
---

start the test server
`yarn dev`

start the test client
`yarn dev`

run the tests in the app
`yarn test`

The tests app declares a test reporter in jest.config.js:
`reporters: ['<rootDir>/jest-reporter/jest-reporter.js'],`

Then `/app/jest-reporter.js` **redirects the events to the server by calling the mutations** there as you can check on `notifyOnTestResult`.

The server exposes **subscriptions** to the clients that want to be notified. The clients will subscribe to those. 

**When the mutations are called on the server they notify the subscribed client(s).**


Foreseable Future
---

The apollo server acts as a middleware between the app that runs the tests and the browser that reduce/consolidate them. That will probably allow running multiple jest tests in parallel, speeding up slow test suites when needed. 

