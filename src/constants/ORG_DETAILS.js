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
      list: [100, 250, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 14000, 16000, 18000, 20000, 22000, 24000, 26000, 28000, 30000]
    }
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
    }
  }

module.exports = { RESERVED_EVENTS, PLAN_OPTIONS };