import { useSubscription } from '@apollo/react-hooks'
import { USE_ON_TEST_START_SUBSCRIPTION } from './USE_ON_TEST_START_SUBSCRIPTION'

export const useOnTestStartSubscription = (options) => {
  const subscriptionResponse = useSubscription(
    USE_ON_TEST_START_SUBSCRIPTION,
    options,
  )

  if (subscriptionResponse.error) {
    console.error(subscriptionResponse.error)
  }
}
