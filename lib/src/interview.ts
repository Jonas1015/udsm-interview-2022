type data = {
  value: number
  name: string
  code: string
}

let dataArray: data[]

export function getProcessedData(
  yearOneData: any,
  yearTwoData: any,
  yearThreeData: any
): data[] {
  // TODO:
  // 1. Remove data items that has reporting rate less than 50
  // 2. Combine relevant data (data of the same code) from each year inorder to compute average
  // 3. Compute average for the combined data to arrive to single value (average value)
  // 4. Return the averaged data as final output
  /***
   * [
      {
        value: 43,
        name: 'Number of members registered',
        code: 'MEMBER_REGISTERED',
      },
      {
        value: 17,
        name: 'Number of active members',
        code: 'ACTIVE_MEMBERS',
      },
    ]
   */
  let dataRegistered: any[]
  let dataActive: any[]
  yearOneData.forEach((element: any) => {
    if(Number(element.reportingRate) >= 50 && element.code == 'MEMBER_REGISTERED' ){
      dataRegistered.push(element)
    }
  })
  yearTwoData.forEach((element: any) => {
    if(Number(element.reportingRate) >= 50 && element.code == 'MEMBER_REGISTERED' ){
      dataRegistered.push(element)
    }
  })
  yearThreeData.forEach((element: any) => {
    if(Number(element.reportingRate) >= 50 && element.code == 'MEMBER_REGISTERED' ){
      dataRegistered.push(element)
    }
  })
  yearOneData.forEach((element: any) => {
    if(Number(element.reportingRate) >= 50 && element.code == 'ACTIVE_MEMBERS' ){
      dataActive.push(element)
    }
  })
  yearTwoData.forEach((element: any) => {
    if(Number(element.reportingRate) >= 50 && element.code == 'ACTIVE_MEMBERS' ){
      dataActive.push(element)
    }
  })
  yearThreeData.forEach((element: any) => {
    if(Number(element.reportingRate) >= 50 && element.code == 'ACTIVE_MEMBERS' ){
      dataActive.push(element)
    }
  })

  let valueRegistered: number
  let valueActive: number
  dataRegistered.forEach((element: any) => {
    valueRegistered += element.value
  })
  dataActive.forEach((element: any) => {
    valueActive += element.value
  })

  let avgRegistered: number = valueRegistered/dataRegistered.length
  let avgActive: number = valueActive/dataActive.length

  dataArray.push({
    value: avgRegistered,
    name: 'Number of members registered',
    code: 'MEMBER_REGISTERED',
  })
  dataArray.push({
    value: avgActive,
    name: 'Number of active members',
    code: 'ACTIVE_MEMBERS',
  })


  return dataArray;
}
