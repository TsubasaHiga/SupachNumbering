import InfoIcon from '@mui/icons-material/Info'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import { useCallback } from 'react'

import GetI18n from '~/modules/GetI18n'
import IndentWrap from '~/pages/Popup/components/IndentWrap/IndentWrap'
import TextLabel from '~/pages/Popup/components/TextLabel/TextLabel'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const unit = GetI18n('popup_settings_main_select_numbering_length_unit')

const marks = [
  {
    value: 0,
    label: GetI18n('popup_settings_main_select_numbering_length_all'),
  },
  {
    value: 1,
    label: '1' + unit,
  },
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
    margin: '4px 2px 20px',
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
    '&[data-index="0"]': {
      transform: 'unset',
    },
    '&[data-index="6"]': {
      transform: 'unset',
      left: 'unset !important',
      right: '0',
    },
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
  const { numberingType, uniqueNumberingStringLength }: SettingsType = settings

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
        return { ...prevState, uniqueNumberingStringLength: value }
      })
    },
    [setSettings]
  )

  const renderUniqueLengthSlider = useCallback((): JSX.Element => {
    return (
      <IndentWrap
        title="popup_settings_main_select_numbering_length_label"
        help="popup_settings_main_select_numbering_length_help"
      >
        <CustomSlider
          disabled={!['uniqueId', 'uniqueUserName'].includes(numberingType)}
          size="small"
          aria-label="set-numbering-length"
          value={uniqueNumberingStringLength}
          onChange={numberingLengthHandleChange}
          getAriaLabel={() => 'length'}
          valueLabelFormat={(x) => x + unit}
          step={1}
          valueLabelDisplay="auto"
          marks={marks}
          min={0}
          max={6}
        />
      </IndentWrap>
    )
  }, [numberingLengthHandleChange, numberingType, uniqueNumberingStringLength])

  return (
    <>
      <RadioGroup
        aria-labelledby="numbering-type-select"
        value={numberingType}
        name="radio-buttons-group"
        onChange={numberingTypeHandleChange}
        style={{ marginTop: 0 }}
      >
        <div>
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
        </div>

        <div>
          <FormControlLabel
            value="uniqueId"
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
          {numberingType === 'uniqueId' && renderUniqueLengthSlider()}
        </div>

        <div>
          <FormControlLabel
            value="uniqueUserName"
            control={<Radio size="small" />}
            label={
              <>
                {isNew && <TextLabel text="NEW" />}
                {GetI18n('popup_settings_main_select_numbering_type_label3')}
                <span>
                  <InfoIcon fontSize="inherit" />
                  {GetI18n(
                    'popup_settings_main_select_numbering_type_label3_caption'
                  )}
                </span>
              </>
            }
          />
          {numberingType === 'uniqueUserName' && renderUniqueLengthSlider()}
        </div>
      </RadioGroup>
    </>
  )
}

export default SelectNumberingType
