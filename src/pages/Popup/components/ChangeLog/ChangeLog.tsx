import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { memo, useCallback, useState } from 'react'

import changeLog from '~/const/changeLog'
import GetDateFormatted from '~/modules/GetDateString'
import { useCommonStore } from '~/store/atoms/useCommonStore'
import { CommonType } from '~/types/CommonType'

import styles from './ChangeLog.module.scss'

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:first-of-type': {
      borderRadius: '6px 6px 0 0'
    },
    '&:last-of-type': {
      borderRadius: '0 0 6px 6px'
    },
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    }
  })
)

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}))

const ChangeLog = (): JSX.Element => {
  const [common] = useCommonStore()
  const { lastUpdateDate } = common as CommonType
  const [expanded, setExpanded] = useState<string | false>('panel0')

  const handleChange = useCallback(
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    },
    []
  )

  return (
    <div className={styles.root}>
      {changeLog.map((item, index) => {
        console.log(lastUpdateDate)

        // アップデート日付取得
        const date = index === 0 && lastUpdateDate ? lastUpdateDate : GetDateFormatted(item.date)

        return (
          <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
              <Typography>
                Version {item.version}（{date}）
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {item.changes.map((change, changeIndex) => (
                  <li key={changeIndex}>
                    <span data-type={change.type}>{change.type}</span>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: change.message
                      }}
                    />
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}

export default memo(ChangeLog)
