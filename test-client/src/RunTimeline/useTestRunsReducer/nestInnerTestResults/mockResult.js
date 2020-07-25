export const mockResult = ({
  ancestorTitles = [],
  duration = 2,
  failureMessage = null,
  fullName = 'Full name describe Mock Test',
  location = null,
  numPassingAsserts = 0,
  status = 'passed',
  title = 'Mock Test',
} = {}) => ({
  ancestorTitles,
  duration,
  failureMessage,
  fullName,
  location,
  numPassingAsserts,
  status,
  title,
})
