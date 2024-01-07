// constants for slider component list
const RESERVED_EVENTS = {
    errors: {
      key: "reservedErrors",
      title: "Reserved Errors",
      list: [50, 100, 200, 300, 400, 500, 1000, 1500, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
    },
    transactions: {
      key: "reservedTransactions",
      title: "Reserved Transactions",
      list: [100, 250, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000, 125000, 150000]
    },
    replays: {
      key: "reservedReplays",
      title: "Reserved Replays",
      list: [0.5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    },
    attachments: {
      key: "reservedAttachments",
      title: "Reserved Attachments",
      list: [0.001, 0.025, 0.050, 0.075, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    },
  };
  
  const PLAN_OPTIONS = {
    plan: {
      key: "plan",
      title: "Subscription Tier",
      list: ["Team", "Business"],
    },
    cycle: {
      key: "cycle",
      title: "Billing Period",
      list: ["Monthly", "Annual"],
    },
    iteration: {
      key: "iteration",
      title: "Iteration",
      list: ['AM1', 'AM2'],
    }
  }

module.exports = { RESERVED_EVENTS, PLAN_OPTIONS };