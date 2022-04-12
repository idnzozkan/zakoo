import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'
import moment from 'moment'

export const getIcon = percentage => {
  if (percentage < 0) return <ArrowDownwardOutlinedIcon />
  else return <ArrowUpwardOutlinedIcon />
}

export const getPrevMonth = num => {
  return moment().subtract(num, 'month').month() + 1
}
