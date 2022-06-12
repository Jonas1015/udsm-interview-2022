import { getProcessedData } from './interview';
describe('Given list of 3 year data for DHIS2 Club membership', () => {
  const yearOneData = [
    {
      value: 10,
      name: 'Number of members registered',
      code: 'MEMBER_REGISTERED',
      reportingRate: '10',
    },
    {
      value: 9,
      name: 'Number of active members',
      code: 'ACTIVE_MEMBERS',
      reportingRate: '50',
    },
  ];

  const yearTwoData = [
    {
      value: 30,
      name: 'Number of members registered',
      code: 'MEMBER_REGISTERED',
      reportingRate: '70',
    },
    {
      value: 25,
      name: 'Number of active members',
      code: 'ACTIVE_MEMBERS',
      reportingRate: '90',
    },
  ];

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

  it('should return a single list of filltered membership information', () => {
    /**
     * Final Result
     * [
        {
          "value": 43,
          "name": "Number of members registered",
          "code": "MEMBER_REGISTERED"
        },
        {
          "value": 17,
          "name": "Number of active members",
          "code": "ACTIVE_MEMBERS"
        }
      ]

     */
    expect(getProcessedData(yearOneData, yearTwoData, yearThreeData)).toEqual([
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
    ]);
  });
});
