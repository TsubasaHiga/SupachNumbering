const GetDateFormatted = (date: Date | undefined): string => {
  if (!date) return ''
  console.log({ date })

  return date
    .toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .split('-')
    .join('/')
}

export default GetDateFormatted
