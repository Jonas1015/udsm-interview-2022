import { yearData, data } from './types'

export function getProcessedData( yearOneData: yearData[], yearTwoData: yearData[],yearThreeData: yearData[]): data[] {

  /* holds all registered members for all years */
  const registeredData: yearData[] = []

  /* holds all active members for all years */
  const activeData: yearData[] = [] 

  /* holds our final result */
  const combinedYearData: data [] = []

  // put all data into one array
  const years: any[] = [yearOneData, yearTwoData, yearThreeData]

  // Loop over each element in year array
  for (let year of years) {
    for (let yearData of year) {
      /* check for registered data */
      if ((Number(yearData.reportingRate) >= 50) && (yearData.code === 'MEMBER_REGISTERED')) {
        registeredData.push(yearData)
      }

      /* check for active data */
      if ((Number(yearData.reportingRate) >= 50) && (yearData.code === 'ACTIVE_MEMBERS')) {
        activeData.push(yearData)
      }
    }
  }

  // Find average of all arrays with data we need
  let averageRegisteredData = (registeredData.map((data: yearData) => data.value).reduce((a: number, b: number) => a + b, 0)) / registeredData.length

  let averageActiveData = (activeData.map((data: yearData) => data.value).reduce((a: number, b: number) => a + b, 0)) / registeredData.length

  /* update combined data */
  combinedYearData.push({
    value: averageRegisteredData,
    name: 'Number of members registered',
    code: 'MEMBER_REGISTERED'
  })

  combinedYearData.push({
    value: averageActiveData,
    name: 'Number of active members',
      code: 'ACTIVE_MEMBERS'
  })

  return combinedYearData
}