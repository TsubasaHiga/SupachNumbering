import 'react-medium-image-zoom/dist/styles.css'

import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import {
  IconBellRinging,
  IconBrandChrome,
  IconSettings,
  IconTools,
} from '@tabler/icons'
import Zoom from 'react-medium-image-zoom'

import img from '../../assets/img/popup.png'
import define from '../../common/constants/define'
import { useSettingsStore } from '../../common/useSettingsStore'
import GetI18n from '../../utils/GetI18n'
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

const Popup = (): JSX.Element => {
  const [isPersistent, error] = useSettingsStore()

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
      </div>

      <Footer />
    </>
  )
}

export default Popup
