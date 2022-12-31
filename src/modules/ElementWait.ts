import elementReady from 'element-ready'

import define from '~/const/define'

const ElementWait = async (
  targetElementString: string
): Promise<HTMLElement | false> => {
  const element = await elementReady(
    targetElementString,
    define.ELEMENT_READY_OPTIONS
  )

  try {
    return element ? element : false
  } catch (error) {
    console.error(error)
    return false
  }
}

export default ElementWait
