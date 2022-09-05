import CloseIcon from '@mui/icons-material/Close'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { useCallback, useState } from 'react'

import ChangeLog from '~/pages/Popup/components/ChangeLog/ChangeLog'
import { useCommonStore } from '~/store/atoms/useCommonStore'
import { CommonType } from '~/types/CommonType'

import styles from './UpdateDialog.module.scss'

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '8px',
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2.5),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1.5),
  },
}))

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const CustomDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle
      className={styles.title}
      sx={{ m: 0, p: 2, pt: 2.5, pb: 2.5 }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 16,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

const UpdateDialog = (): JSX.Element => {
  // manifest
  const manifest = chrome.runtime.getManifest()

  // useCommonStore
  const [, setCommon] = useCommonStore()

  // モーダルの開閉ステータス
  const [open, setOpen] = useState(true)

  const handleClose = useCallback(() => {
    setOpen(false)
    setCommon((state: CommonType) => {
      return { ...state, isUpdated: false }
    })

    // backgroundにメッセージ送信
    chrome.runtime.sendMessage({ type: 'closed-update-dialog' })
  }, [setCommon])

  return (
    <CustomDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
    >
      <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
        🎉 Updated to Version <code>{manifest.version}</code>
      </CustomDialogTitle>
      <DialogContent>
        <ChangeLog />
      </DialogContent>
    </CustomDialog>
  )
}

export default UpdateDialog
