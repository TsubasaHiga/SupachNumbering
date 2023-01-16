import Typography from '@mui/material/Typography'
import { memo, useCallback, useState } from 'react'

import changeLog from '~/const/changeLog'
import GetDateFormatted from '~/modules/GetDateString'
import { CustomAccordion, CustomAccordionDetails, CustomAccordionSummary } from '~/ui/CustomAccordion'

import styles from './ChangeLog.module.scss'

const ChangeLog = (): JSX.Element => {
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
        return (
          <CustomAccordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <CustomAccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
              <Typography>
                Version {item.version}（{GetDateFormatted(item.date)}）
              </Typography>
            </CustomAccordionSummary>
            <CustomAccordionDetails>
              <ul>
                {item.changes.map((change, changeIndex) => (
                  <li key={changeIndex}>
                    <span data-type={change.type}>{change.type}</span>
                    <p dangerouslySetInnerHTML={{ __html: change.message }} />
                  </li>
                ))}
              </ul>
            </CustomAccordionDetails>
          </CustomAccordion>
        )
      })}
    </div>
  )
}

export default memo(ChangeLog)
