import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import {
  IconBellRinging,
  IconBrandChrome,
  IconGitPullRequest,
  IconSettings,
  IconTools,
} from '@tabler/icons'

import img from '~/assets/img/popup.png'
import define from '~/const/define'
import GetI18n from '~/modules/GetI18n'
import ChangeLog from '~/pages/Popup/components/ChangeLog/ChangeLog'
import SettingsWrap from '~/pages/Popup/components/SettingsWrap/SettingsWrap'
import UpdateDialog from '~/pages/Popup/components/UpdateDialog/UpdateDialog'
import { useCommonStore } from '~/store/atoms/useCommonStore'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { CommonType } from '~/types/CommonType'

import AddChatAvatarBlur from './components/AddChatAvatarBlur/AddChatAvatarBlur'
import AddSuperChatAvatarBlur from './components/AddSuperChatAvatarBlur/AddSuperChatAvatarBlur'
import AddSuperChatNumbering from './components/AddSuperChatNumbering/AddSuperChatNumbering'
import ChangeChatFontSize from './components/ChangeChatFontSize/ChangeChatFontSize'
import ExpandChatHeight from './components/ExpandChatHeight/ExpandChatHeight'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HideAuthorName from './components/HideAuthorName/HideAuthorName'
import HideChatAvatar from './components/HideChatAvatar/HideChatAvatar'
import HideSuperChatAvatar from './components/HideSuperChatAvatar/HideSuperChatAvatar'
import HideSuperChatPrice from './components/HideSuperChatPrice/HideSuperChatPrice'
import HideSuperChatSponsorTicker from './components/HideSuperChatSponsorTicker/HideSuperChatSponsorTicker'
import ShrinkChatMessage from './components/ShrinkChatMessage/ShrinkChatMessage'
import WrapSuperChat from './components/WrapSuperChat/WrapSuperChat'
import styles from './Popup.module.scss'

const backgroundColor = '#f9fafb'
const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'Noto Sans JP'].join(','),
    allVariants: {
      color: '#3c3c3c',
    },
  },
  components: {
    MuiFormGroup: {
      styleOverrides: {
        root: {
          '&:not(:first-of-type)': {
            marginTop: '20px',
          },

          '&[role="radiogroup"]': {
            '.MuiButtonBase-root': {
              padding: '4px',
            },
            '.MuiFormControlLabel-root': {
              '&:not(:first-of-type)': {
                marginTop: '0',
              },
            },
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '15px',
          color: '#aaa',
          marginBottom: '10px',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: '-3px',
          '&:not(:first-of-type)': {
            marginTop: '4px',
          },
          '&.Mui-disabled': {
            cursor: 'not-allowed',
            opacity: '.5',
          },
        },
        label: {
          fontSize: '12px',
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
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
            lineHeight: '1',
            color: '#666',
            display: 'flex',
            fontSize: '11px',
            fontWeight: '400',
            padding: '3px 8px 3px 5px',
            marginLeft: '3px',
            borderRadius: '999px',
            svg: {
              color: '#999',
              fontSize: '15px',
              marginRight: '4px',
            },
            '&[data-text]': {
              marginLeft: '0',
              marginRight: '5px',
              padding: '4px 8px 3px',
              fontSize: '11px',
            },
            '&[data-color="red"]': {
              backgroundColor: '#d73a4a',
              color: '#fff',
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
          padding: '0 5px',
          left: '10px',
          top: '-10px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto',
        },
      },
    },
  },
})

const Popup = (): JSX.Element => {
  const [isPersistent, error] = useSettingsStore()
  const [common] = useCommonStore()
  const { isUpdated } = common as CommonType

  return (
    <ThemeProvider theme={theme}>
      {isUpdated && <UpdateDialog />}
      <Header />
      <div className={styles.root}>
        <section>
          <h2>
            <IconBrandChrome size={22} stroke="1.5" />
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
            <IconSettings size={22} stroke="1.5" />
            <span>{GetI18n('popup_settings_title')}</span>
          </h2>
          <div className={styles.content}>
            <div className={styles.settings}>
              <FormGroup>
                <FormLabel>{GetI18n('popup_settings_main_title')}</FormLabel>
                <AddSuperChatNumbering />
              </FormGroup>

              <FormGroup>
                <FormLabel>{GetI18n('popup_settings_sub_title')}</FormLabel>
                <SettingsWrap>
                  <Typography variant="caption" component="div">
                    {GetI18n('popup_settings_sub_superchat_title')}
                  </Typography>
                  <HideSuperChatPrice />
                  <HideSuperChatAvatar />
                  <AddSuperChatAvatarBlur />
                  <WrapSuperChat />
                  <HideSuperChatSponsorTicker isNew={true} />
                </SettingsWrap>

                <SettingsWrap>
                  <Typography variant="caption" component="div">
                    {GetI18n('popup_settings_sub_chat_title')}
                  </Typography>
                  <HideChatAvatar />
                  <AddChatAvatarBlur />
                  <HideAuthorName />
                  <ShrinkChatMessage />
                  <ExpandChatHeight />
                  <ChangeChatFontSize />
                </SettingsWrap>
              </FormGroup>

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
            <IconTools size={22} stroke="1.5" />
            <span>{GetI18n('popup_image_title')}</span>
          </h2>
          <div className={styles.content}>
            <div className={styles.image}>
              <a href={img} target="_blank" rel="noreferrer noopener">
                <img src={img} alt={GetI18n('popup_image_title')} />
              </a>
            </div>
            <small>{GetI18n('popup_image_caption')}</small>
          </div>
        </section>

        <section>
          <h2>
            <IconBellRinging size={22} stroke="1.5" />
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
            <IconGitPullRequest size={22} stroke="1.5" />
            <span>{GetI18n('popup_changelog_title')}</span>
          </h2>
          <div className={styles.content}>
            <ChangeLog />
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Popup
