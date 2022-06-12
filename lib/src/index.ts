export { getProcessedData } from './interview';
const yearThreeData = [
    {
      value: 56,
      name: 'Number of members registered',
      code: 'MEMBER_REGISTERED',
      reportingRate: '70',
    },
    {
      value: 43,
      name: 'Number of active members',
      code: 'ACTIVE_MEMBERS',
      reportingRate: '20',
    },
  ];

  let registeredRateIndex = yearThreeData.findIndex((element: any) => Number(element.reportingRate) < 50)

  console.log(registeredRateIndex)
