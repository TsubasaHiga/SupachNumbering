import { Box } from '@mui/system'

import styles from './SettingsWrap.module.scss'

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
}

const SettingsWrap = ({ children, style }: Props): JSX.Element => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      className={styles.settingBox}
      style={style}
    >
      {children}
    </Box>
  )
}

export default SettingsWrap
