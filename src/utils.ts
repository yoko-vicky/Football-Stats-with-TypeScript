export const dateStringToDate = (strDate: string): Date => { // 28/10/2018
  const [day, month, year] = strDate.split('/').map((val:string):number => parseInt(val))
  return new Date(year, month - 1, day)
}
