import { useEffect } from 'react'

const useMutationObserver = (
  elements: NodeListOf<HTMLElement> | null,
  callback: Function,
  config: MutationObserverInit
) => {
  useEffect(() => {
    const mutationObserver = new MutationObserver((mutations) => {
      mutationObserver.disconnect()
      callback(mutations)
      elements?.forEach((element) => mutationObserver.observe(element, config))
    })

    elements?.forEach((element) => mutationObserver.observe(element, config))

    return () => mutationObserver.disconnect()
  }, [elements, callback, config])
}

export default useMutationObserver
