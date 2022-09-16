import ReplayIcon from '@mui/icons-material/Replay'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { memo } from 'react'

import GetI18n from '~/modules/GetI18n'

type Props = {
  isDisabled: boolean
  onClick: () => void
}

const ReApplyingButton = ({ isDisabled, onClick }: Props): JSX.Element => {
  return (
    <Tooltip title={GetI18n('popup_re_applying')} arrow placement="right">
      <IconButton
        disabled={isDisabled}
        onClick={onClick}
        color="inherit"
        style={{
          marginLeft: '4px',
          marginTop: '-2px',
          fontSize: '20px',
          color: '#3c3c3c',
        }}
      >
        <ReplayIcon fontSize="inherit" color="inherit" />
      </IconButton>
    </Tooltip>
  )
}

export default memo(ReApplyingButton)
