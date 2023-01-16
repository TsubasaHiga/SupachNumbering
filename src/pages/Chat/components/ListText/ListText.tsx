import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import { memo } from 'react'

import GetI18n from '~/modules/GetI18n'

type Props = {
  enabled?: boolean
  icon: JSX.Element
  label: string
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const ListItemContent = ({ enabled = true, icon, label, onClick }: Props): JSX.Element => {
  return (
    <MenuItem disabled={!enabled} onClick={(e) => onClick(e)}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        primaryTypographyProps={{
          fontSize: '13px',
          fontWeight: 'medium',
          variant: 'body2',
          whiteSpace: 'break-spaces'
        }}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: GetI18n(label)
          }}
        ></span>
      </ListItemText>
    </MenuItem>
  )
}

export default memo(ListItemContent)
