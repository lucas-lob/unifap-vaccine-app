/**
* Set hours of a date to 00:00:00 and return the date in ISO format
*/
export const getOnlyDateISOString = (date: Date): string => {
  const onlyDate = date.toISOString().split('T')[0]

  return new Date(onlyDate).toISOString()
}