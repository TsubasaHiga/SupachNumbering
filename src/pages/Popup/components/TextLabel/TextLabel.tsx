import { memo } from 'react'

type Props = {
  text: string
  color?: string
}

const TextLabel = ({ text, color = 'red' }: Props): JSX.Element => {
  return (
    <span data-color={color} data-text>
      {text}
    </span>
  )
}

export default memo(TextLabel)
