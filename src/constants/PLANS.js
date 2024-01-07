const transactionQuotas = [
  // actual quotas are 1000 * min/max
  // costs are per transaction in USD
  {
    bucketId: "t1",
    minQuota: 100,
    maxQuota: 250,
    businessCost: 0.000300,
    teamCost: 0.000100,
  },
  {
    bucketId: "t2",
    minQuota: 250,
    maxQuota: 500,
    businessCost: 0.000178,
    teamCost: 0.000058,
  },
  {
    bucketId: "t3",
    minQuota: 500,
    maxQuota: 4500,
    businessCost: 0.000130,
    teamCost: 0.000052,
  },
  {
    bucketId: "t4",
    minQuota: 4500,
    maxQuota: 5000,
    businessCost: 0.000092,
    teamCost: 0.000046,
  },
  {
    bucketId: "t5",
    minQuota: 5000,
    maxQuota: 10000,
    businessCost: 0.000074,
    teamCost: 0.000039,
  },
  {
    bucketId: "t6",
    minQuota: 10000,
    maxQuota: 10000,
    businessCost: 0.000040,
    teamCost: 0.000027,
  },
  {
    bucketId: "t7",
    minQuota: 100000,
    maxQuota: 150000,
    businessCost: 0.000032,
    teamCost: 0.000019,
  },
];

const transactionOnDemand = [
  // actual quotas are 1000 * min/max
  // costs are per transaction in USD
  {
    bucketId: "t1",
    minQuota: 100,
    maxQuota: 250,
    businessCost: 0.000390,
    teamCost: 0.000130,
  },
  {
    bucketId: "t2",
    minQuota: 250,
    maxQuota: 500,
    businessCost: 0.000231,
    teamCost: 0.0000754,
  },
  {
    bucketId: "t3",
    minQuota: 500,
    maxQuota: 4500,
    businessCost: 0.000169,
    teamCost: 0.0000676,
  },
  {
    bucketId: "t4",
    minQuota: 4500,
    maxQuota: 5000,
    businessCost: 0.000120,
    teamCost: 0.0000598,
  },
  {
    bucketId: "t5",
    minQuota: 5000,
    maxQuota: 10000,
    businessCost: 0.000096,
    teamCost: 0.00005083,
  },
  {
    bucketId: "t6",
    minQuota: 10000,
    maxQuota: 100000,
    businessCost: 0.000053,
    teamCost: 0.00003558,
  },
  {
    bucketId: "t7",
    minQuota: 100000,
    maxQuota: 150000,
    businessCost: 0.000042,
    teamCost: 0.00002491,
  },
];

const errorQuotas = [
  // actual quotas are 1000 * min/max
  // costs are per event in USD 
  {
    bucketId: "e1",
    minQuota: 50,
    maxQuota: 100,
    businessCost: 0.000890,
    teamCost: 0.000290,
  },
  {
    bucketId: "e2",
    minQuota: 100,
    maxQuota: 500,
    businessCost: 0.000500,
    teamCost: 0.000175,
  },
  {
    bucketId: "e3",
    minQuota: 500,
    maxQuota: 2000,
    businessCost: 0.000300,
    teamCost: 0.000150,
  },
  {
    bucketId: "e4",
    minQuota: 2000,
    maxQuota: 10000,
    businessCost: 0.000300,
    teamCost: 0.000150,
  },
  {
    bucketId: "e5",
    minQuota: 10000,
    maxQuota: 20000,
    businessCost: 0.000144,
    teamCost: 0.000120,
  },
  {
    bucketId: "e6",
    minQuota: 20000,
    maxQuota: 50000,
    businessCost: 0.000132,
    teamCost: 0.000110,
  },
];

const errorOnDemand = [
  // actual quotas are 1000 * min/max
  // costs are per event in USD 
  {
    bucketId: "e1",
    minQuota: 50,
    maxQuota: 100,
    businessCost: 0.001157,
    teamCost: 0.000377,
  },
  {
    bucketId: "e2",
    minQuota: 100,
    maxQuota: 500,
    businessCost: 0.000650,
    teamCost: 0.000228,
  },
  {
    bucketId: "e3",
    minQuota: 500,
    maxQuota: 2000,
    businessCost: 0.000390,
    teamCost: 0.000195,
  },
  {
    bucketId: "e4",
    minQuota: 2000,
    maxQuota: 10000,
    businessCost: 0.000390,
    teamCost: 0.000195,
  },
  {
    bucketId: "e5",
    minQuota: 10000,
    maxQuota: 20000,
    businessCost: 0.000187,
    teamCost: 0.000156,
  },
  {
    bucketId: "e6",
    minQuota: 20000,
    maxQuota: 50000,
    businessCost: 0.000172,
    teamCost: 0.000143,
  },
];

const replayQuotas = [
  {
    bucketId: "r1",
    minQuota: 0.5,
    maxQuota: 10,
    businessCost: 0.003052631579,
    teamCost: 0.003052631579,
  },
  {
    bucketId: "r2",
    minQuota: 10,
    maxQuota: 25,
    businessCost: 0.002850,
    teamCost: 0.002850,
  },
  {
    bucketId: "r3",
    minQuota: 25,
    maxQuota: 100,
    businessCost: 0.002850,
    teamCost: 0.002850,
  },
  {
    bucketId: "r3",
    minQuota: 100,
    maxQuota: 1000,
    businessCost: 0.002565,
    teamCost: 0.002565,
  },
];

const replayOnDemand = [
  {
    bucketId: "r1",
    minQuota: 0.5,
    maxQuota: 10,
    businessCost: 0.003968421053,
    teamCost: 0.003968421053,
  },
  {
    bucketId: "r2",
    minQuota: 10,
    maxQuota: 25,
    businessCost: 0.003705,
    teamCost: 0.003705,
  },
  {
    bucketId: "r3",
    minQuota: 25,
    maxQuota: 100,
    businessCost: 0.003705,
    teamCost: 0.003705,
  },
  {
    bucketId: "r3",
    minQuota: 100,
    maxQuota: 1000,
    businessCost: 0.003335,
    teamCost: 0.003335,
  },
]

module.exports = { transactionQuotas, transactionOnDemand, errorQuotas, errorOnDemand, replayQuotas, replayOnDemand };
