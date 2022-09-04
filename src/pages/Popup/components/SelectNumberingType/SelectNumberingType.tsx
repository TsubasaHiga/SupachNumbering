import HelpIcon from '@mui/icons-material/Help'
import InfoIcon from '@mui/icons-material/Info'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { useCallback } from 'react'

import GetI18n from '~/modules/GetI18n'
import TextLabel from '~/pages/Popup/components/TextLabel/TextLabel'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const unit = GetI18n('popup_settings_main_select_numbering_length_unit')

const marks = [
  {
    value: 2,
    label: '2' + unit,
  },
  {
    value: 3,
    label: '3' + unit,
  },
  {
    value: 4,
    label: '4' + unit,
  },
  {
    value: 5,
    label: '5' + unit,
  },
  {
    value: 6,
    label: '6' + unit,
  },
]

const CustomSlider = styled(Slider)(({ theme }) => ({
  '&.MuiSlider-root': {
    margin: '4px 10px 20px',
    width: 'auto',
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    borderRadius: '3px',
    lineHeight: 1,
  },
  '& .MuiSlider-markLabel': {
    fontSize: 11,
    color: '#a9a9a9',
    '&.MuiSlider-markLabelActive': {
      color: '#000',
    },
  },
}))

type Props = {
  isNew?: boolean
}

const SelectNumberingType = ({ isNew = false }: Props): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { numberingType, uniqueNumberingHashLength }: SettingsType = settings

  // numberingTypeHandleChange
  const numberingTypeHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = (event.target as HTMLInputElement).value
      setSettings((prevState: any) => {
        return { ...prevState, numberingType: value }
      })
    },
    [setSettings]
  )

  // numberingLengthHandleChange
  const numberingLengthHandleChange = useCallback(
    (event: Event, newValue: number | number[]) => {
      const value = newValue as number
      setSettings((prevState: any) => {
        return { ...prevState, uniqueNumberingHashLength: value }
      })
    },
    [setSettings]
  )

  return (
    <>
      <RadioGroup
        aria-labelledby="numbering-type-select"
        value={numberingType}
        name="radio-buttons-group"
        onChange={numberingTypeHandleChange}
        style={{ marginTop: 0 }}
      >
        <FormControlLabel
          value="default"
          control={<Radio size="small" />}
          label={
            <>
              {GetI18n('popup_settings_main_select_numbering_type_label1')}
              <span>
                <InfoIcon fontSize="inherit" />
                {GetI18n(
                  'popup_settings_main_select_numbering_type_label1_caption'
                )}
              </span>
            </>
          }
        />
        <FormControlLabel
          value="unique"
          control={<Radio size="small" />}
          label={
            <>
              {isNew && <TextLabel text="NEW" />}
              {GetI18n('popup_settings_main_select_numbering_type_label2')}
              <span>
                <InfoIcon fontSize="inherit" />
                {GetI18n(
                  'popup_settings_main_select_numbering_type_label2_caption'
                )}
              </span>
            </>
          }
        />
      </RadioGroup>
      <Box
        marginTop={1.5}
        marginLeft={4}
        marginBottom={1}
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
          {GetI18n('popup_settings_main_select_numbering_length_label')}
          <Tooltip
            title={GetI18n('popup_settings_main_select_numbering_length_help')}
            arrow
            placement="right"
          >
            <HelpIcon
              fontSize="inherit"
              style={{ fontSize: '16px', marginLeft: '4px' }}
            />
          </Tooltip>
        </Typography>
        <CustomSlider
          disabled={numberingType !== 'unique'}
          size="small"
          aria-label="set-numbering-length"
          value={uniqueNumberingHashLength}
          onChange={numberingLengthHandleChange}
          getAriaLabel={() => 'length'}
          valueLabelFormat={(x) => x + unit}
          step={1}
          valueLabelDisplay="auto"
          marks={marks}
          min={2}
          max={6}
        />
      </Box>
    </>
  )
}

export default SelectNumberingType
