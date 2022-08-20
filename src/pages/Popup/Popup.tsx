import 'react-medium-image-zoom/dist/styles.css'

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import {
  IconBellRinging,
  IconBrandChrome,
  IconGitPullRequest,
  IconSettings,
  IconTools,
} from '@tabler/icons'
import React, { useState } from 'react'
import Zoom from 'react-medium-image-zoom'

import img from '~/assets/img/popup.png'
import changeLog from '~/const/changeLog'
import define from '~/const/define'
import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'

import AddChatAvatarBlur from './components/AddChatAvatarBlur/AddChatAvatarBlur'
import AddSuperChatAvatarBlur from './components/AddSuperChatAvatarBlur/AddSuperChatAvatarBlur'
import AddSuperChatNumbering from './components/AddSuperChatNumbering/AddSuperChatNumbering'
import ChangeChatFontSize from './components/ChangeChatFontSize/ChangeChatFontSize'
import ExpandChatHeight from './components/ExpandChatHeight/ExpandChatHeight'
import Footer from './components/Footer/Footer'
import HideChatAvatar from './components/HideChatAvatar/HideChatAvatar'
import HideSuperChatAvatar from './components/HideSuperChatAvatar/HideSuperChatAvatar'
import HideSuperChatPrice from './components/HideSuperChatPrice/HideSuperChatPrice'
import ShrinkChatMessage from './components/ShrinkChatMessage/ShrinkChatMessage'
import WrapSuperChat from './components/WrapSuperChat/WrapSuperChat'
import styles from './Popup.module.scss'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:first-of-type': {
    borderRadius: '6px 6px 0 0',
  },
  '&:last-of-type': {
    borderRadius: '0 0 6px 6px',
  },
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

const Popup = (): JSX.Element => {
  const [isPersistent, error] = useSettingsStore()

  const [expanded, setExpanded] = useState<string | false>('panel0')

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      console.log(panel)
      setExpanded(newExpanded ? panel : false)
    }

  const backgroundColor = '#f9fafb'
  const theme = createTheme({
    components: {
      MuiFormGroup: {
        styleOverrides: {
          root: {
            '&:not(:first-of-type)': {
              marginTop: '15px',
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontSize: '13px',
            // fontWeight: '700',
            color: '#aaa',
            marginBottom: '7px',
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            marginLeft: '-3px',
            '&:not(:first-of-type)': {
              marginTop: '1px',
            },
            '&.Mui-disabled': {
              cursor: 'not-allowed',
              opacity: '.5',
            },
          },
          label: {
            fontSize: '11px',
            alignItems: 'center',
            display: 'flex',
            fontWeight: 700,
            userSelect: 'none',
            marginLeft: '5px',
            transition: 'opacity 400ms ease',
            '&:not(.Mui-disabled):hover': {
              opacity: '.5',
            },
            span: {
              backgroundColor: '#eee',
              alignItems: 'center',
              display: 'flex',
              fontWeight: '400',
              padding: '3px 8px 3px 5px',
              marginLeft: '3px',
              borderRadius: '999px',
              svg: {
                color: '#999',
                fontSize: '15px',
                marginRight: '3px',
              },
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&.Mui-disabled': {
              cursor: 'not-allowed',
              opacity: '.5',
            },
          },
          input: {
            paddingTop: '4px',
            paddingBottom: '4px',
            fontWeight: '700',
            color: '#777',
            '&.Mui-disabled': {
              cursor: 'not-allowed',
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          caption: {
            position: 'absolute',
            backgroundColor: backgroundColor,
            // color: '#aaa',
            padding: '0 5px',
            left: '10px',
            top: '-10px',
          },
        },
      },
    },
  })

  return (
    <>
      <div className={styles.root}>
        <section>
          <h2>
            <IconBrandChrome size={18} stroke="1.5" />
            <span>{GetI18n('popup_about_title')}</span>
          </h2>
          <div className={styles.content}>
            <p
              dangerouslySetInnerHTML={{ __html: GetI18n('popup_about_desc') }}
            />
          </div>
        </section>

        <section>
          <h2>
            <IconSettings size={18} stroke="1.5" />
            <span>{GetI18n('popup_settings_title')}</span>
          </h2>
          <div className={styles.content}>
            <div className={styles.settings}>
              <ThemeProvider theme={theme}>
                <FormGroup>
                  <FormLabel>{GetI18n('popup_settings_main_title')}</FormLabel>
                  <AddSuperChatNumbering />
                </FormGroup>

                <FormGroup>
                  <FormLabel>{GetI18n('popup_settings_sub_title')}</FormLabel>
                  <Box
                    display="flex"
                    flexDirection="column"
                    className={styles.settingBox}
                  >
                    <Typography variant="caption" component="div">
                      {GetI18n('popup_settings_sub_superchat_title')}
                    </Typography>
                    <WrapSuperChat />
                    <HideSuperChatPrice />
                    <HideSuperChatAvatar />
                    <AddSuperChatAvatarBlur />
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    className={styles.settingBox}
                  >
                    <Typography variant="caption" component="div">
                      {GetI18n('popup_settings_sub_chat_title')}
                    </Typography>
                    <HideChatAvatar />
                    <AddChatAvatarBlur />
                    <ShrinkChatMessage />
                    <ExpandChatHeight />
                    <ChangeChatFontSize />
                  </Box>
                </FormGroup>
              </ThemeProvider>

              {!isPersistent && (
                <Alert severity="error" style={{ marginTop: '10px' }}>
                  <AlertTitle>Error writing to the chrome.storage</AlertTitle>
                  {JSON.stringify(error)}
                </Alert>
              )}
            </div>
          </div>
        </section>

        <section>
          <h2>
            <IconTools size={18} stroke="1.5" />
            <span>{GetI18n('popup_image_title')}</span>
          </h2>
          <div className={styles.content}>
            <div className={styles.image}>
              <Zoom
                zoomMargin={0}
                wrapStyle={{ width: '100%', height: '100%' }}
              >
                <img src={img} alt={GetI18n('popup_image_title')} />
              </Zoom>
            </div>
            <small>{GetI18n('popup_image_caption')}</small>
          </div>
        </section>

        <section>
          <h2>
            <IconBellRinging size={18} stroke="1.5" />
            <span>{GetI18n('popup_notwork_title')}</span>
          </h2>
          <div className={styles.content}>
            <p
              dangerouslySetInnerHTML={{
                __html: GetI18n('popup_notwork_desc').replace(
                  'define.STORE_URL',
                  define.STORE_URL
                ),
              }}
            />
          </div>
        </section>

        <section>
          <h2>
            <IconGitPullRequest size={18} stroke="1.5" />
            <span>{GetI18n('popup_changelog_title')}</span>
          </h2>
          <div className={styles.content}>
            {changeLog.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  aria-controls={`panel${index}d-content`}
                  id={`panel${index}d-header`}
                >
                  <Typography>
                    Version {item.version}（{item.date}）
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {item.changes.map((change, changeIndex) => (
                      <li
                        key={changeIndex}
                        dangerouslySetInnerHTML={{
                          __html: change,
                        }}
                      />
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Popup
