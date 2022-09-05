import HelpIcon from '@mui/icons-material/Help'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'

import GetI18n from '~/modules/GetI18n'

type Props = {
  children: React.ReactNode
  title: string
  help: string
}

const IndentWrap = ({ children, title, help }: Props): JSX.Element => {
  return (
    <Box
      marginTop={1}
      marginLeft={4}
      marginBottom={1.5}
      paddingLeft={2.5}
      paddingRight={2.5}
      borderRadius="6px"
      paddingTop={1.5}
      paddingBottom={1.5}
      border="1px solid #e0e0e0"
      display="flex"
      flexDirection="column"
    >
      <Typography
        variant="h6"
        fontSize="11px"
        fontWeight={700}
        display="flex"
        alignItems="center"
      >
        {GetI18n(title)}
        <Tooltip title={GetI18n(help)} arrow placement="right">
          <HelpIcon
            fontSize="inherit"
            style={{ fontSize: '16px', marginLeft: '4px' }}
          />
        </Tooltip>
      </Typography>
      {children}
    </Box>
  )
}

export default IndentWrap
