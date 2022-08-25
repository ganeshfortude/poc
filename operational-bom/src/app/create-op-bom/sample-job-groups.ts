export interface SampleJobGroups {
  jobGroup: string,
  operations: {
    operationId: number,
    operationName: string,
    operationType: string,
    department: string,
    smv: number,
    sequence: string
  }[]
}

export const sampleJobGroups: SampleJobGroups[] = [
  {
    jobGroup: 'JG-1',
    operations: [
      {
        operationId: 1,
        operationName: 'Bundle',
        operationType: 'Default',
        department: 'Cutting',
        smv: 5,
        sequence: 'SQ'
      },
      {
        operationId: 2,
        operationName: 'Bundle',
        operationType: 'Default',
        department: 'Cutting',
        smv: 5,
        sequence: 'SQ'
      }
    ]
  },
  {
    jobGroup: 'JG-2',
    operations: [
      {
        operationId: 3,
        operationName: 'Bundle',
        operationType: 'Default',
        department: 'Cutting',
        smv: 5,
        sequence: 'SQ'
      },
      {
        operationId: 4,
        operationName: 'Bundle',
        operationType: 'Default',
        department: 'Cutting',
        smv: 5,
        sequence: 'SQ'
      }
    ]
  },
  {
    jobGroup: 'JG-3',
    operations: [
      {
        operationId: 5,
        operationName: 'Bundle',
        operationType: 'Default',
        department: 'Cutting',
        smv: 5,
        sequence: 'SQ'
      }
    ]
  },
  {
    jobGroup: 'JG-4',
    operations: [
      {
        operationId: 7,
        operationName: 'Bundle',
        operationType: 'Default',
        department: 'Cutting',
        smv: 5,
        sequence: 'SQ'
      },
      {
        operationId: 8,
        operationName: 'Bundle',
        operationType: 'Default',
        department: 'Cutting',
        smv: 5,
        sequence: 'SQ'
      }
    ]
  }
];
