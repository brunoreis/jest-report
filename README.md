![shell and web runs](https://user-images.githubusercontent.com/217240/88489729-88659e00-cf6c-11ea-8f24-1c7753c5796e.png)

## Scope

Web report for automated tests focused on:

- showing clean results
- easy keyboard navigation
- interactive
- easy way to navigate from the results to actual test code and code tested
- suggesting code snippets according to the errors

## Vision

TDD is the best tool I know to code whithout needing to keep big chunks of info in my own ram memory. I'm constantly looking at the documentation generated byt the test reports as a reference to:

- copy mock data from there
- copy code from the tests
- know where the code lives and follow the stacks there

The usual jest report is a big text in the shell for each test run. The information there is not visually indexed and hard to be quick scanned.

Having a tool to show this results in a structured way will the TDD coding cycle significantly.

In it will consolidate multiple runs into one report, helping even more. A lot of nice interactions will be added to allow a quick keyboar navigation through the results.

Sorting, reorganizing and and renaming tests is also an activity where I spend quite some time. But I intend to improve them to be as easy as editing a mind map by using this tool.

## Roadmap

I started this this years and I'm slowly working on it at some nights and weekends. Some next steps I foresee:

- ~~improving layout~~
- ~~show/hide the inner elements of a describe block when cliking over its title ("Example Tests" and "Sucessfull and nested" in the image above)~~
- ~~show what failed, the error stack and any extra information on the failing tests~~
- ~~show/hide the failing tests content~~
- ~~show loaders while tests are running~~
- ~~add a "copy to clipboard" button to copy the test file path~~
- ~~add a "copy to clipboard" button to copy file paths from the error stack~~
- ~~add a "delete test run" button to delete a test run from the report and allow a quick vision of the next one. (we will need to rethink the UX here)~~
- ~~show the "Describe"/"Test" aggregated result - fail or success?~~
- ~~show the "Describe"/"Test" totals~~
- show the test (file) aggregated result and totals
- check if all the information that is shown on the test result is shown on the report (console.log, errors,...)

- buttons to open files in the code editor

- show the code where the error happened (it doest not come in the failure message from jest)
- show the test code

- keyboard navigation

- consolidating the result of multiple runs in one report allowing paralele runs (speed) and a report that unites BE and FE tests.
- start the runs from the browser. Rerun specific subsets.

- iprove layout, add storybook and other tools and reports
- share this project for feedback

- edit test names and reorder them
- plugable/customizable/extensible snippets based on failed tests

- ...

## How to Run it / Quick architectural overview

start the test server
`yarn dev`

start the test client
`yarn dev`

run the tests in the test-client to see them in the shell and in the browser
`yarn test --reporters=default --reporters=./jest-reporter/jest-reporter.js --verbose`

The tests app declares a test reporter in jest.config.js:
`reporters: ['<rootDir>/jest-reporter/jest-reporter.js'],`

Then `/app/jest-reporter.js` **redirects the events to the server by calling the mutations** there as you can check on `notifyOnTestResult`.

The server exposes **subscriptions** to the clients that want to be notified. The clients will subscribe to those.

**When the mutations are called on the server they notify the subscribed client(s).**

## Foreseable Future

The apollo server acts as a middleware between the app that runs the tests and the browser that reduce/consolidate them. That will probably allow running multiple tests in parallel, speeding up slow test suites when needed.
