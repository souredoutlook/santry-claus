import { transactionQuotas, transactionOnDemand, errorQuotas, errorOnDemand, replayQuotas, replayOnDemand } from "../constants/PLANS";

const calcBucket = function(min, max, evaluand, reserved, planCost) {

    console.log("inside calcOnDemandBucket")
    const start = max <= reserved ? max : min < reserved ? reserved : min; //ex. max = 100,000 min = 50,000 reserved = 75,000 start is 75,000
    const end = max <= evaluand ? max : min < evaluand ? evaluand : min; //ex. max = 100,00 min = 50,000 accepted/reserved + gift = 1,100,000 end is 100,000
    console.log(`start: ${start}, end: ${end}, planCost: ${planCost}`)

    if (start < end) {
      return  (end - start) * planCost;
    } 

    return 0;
}

export const computeOnDemand = function(giftDetails) {
    const { reservedErrors, acceptedErrors, giftedErrors, reservedTransactions, acceptedTransactions, giftedTransactions, reservedReplays, acceptedReplays, giftedReplays, plan } = giftDetails;

    const onDemand = {transaction: 0, error: 0, replay: 0}

    for (const bucket of errorOnDemand) {
        const { minQuota, maxQuota, businessCost, teamCost } = bucket;

        onDemand.error += calcBucket(minQuota * 1000, maxQuota * 1000, acceptedErrors - giftedErrors, reservedErrors * 1000, plan === "Business" ? businessCost : teamCost);

        console.log(onDemand.error)
    }

    for (const bucket of transactionOnDemand) {
        const { minQuota, maxQuota, businessCost, teamCost } = bucket;

        onDemand.transaction += calcBucket(minQuota * 1000, maxQuota * 1000, acceptedTransactions - giftedTransactions, reservedTransactions * 1000, plan === "Business" ? businessCost : teamCost);

        console.log(onDemand.transaction)
    }

    for (const bucket of replayOnDemand) {
        const { minQuota, maxQuota, businessCost, teamCost } = bucket;

        onDemand.replay += calcBucket(minQuota * 1000, maxQuota * 1000, acceptedReplays - giftedReplays, reservedReplays * 1000, plan === "Business" ? businessCost : teamCost);

        console.log(onDemand.replay)
    }

    return onDemand.transaction + onDemand.error + onDemand.replay;
};

export const computeGiftValue = function(giftDetails) {
    const { reservedErrors, giftedErrors, reservedTransactions, giftedTransactions, reservedReplays, giftedReplays, plan } = giftDetails;

    const giftValue = {transaction: 0, error: 0, replay: 0}

    for (const bucket of errorQuotas) {
        const { minQuota, maxQuota, businessCost, teamCost } = bucket;

        giftValue.error += calcBucket(minQuota * 1000, maxQuota * 1000, (reservedErrors * 1000) + giftedErrors, reservedErrors * 1000, plan === "Business" ? businessCost : teamCost);

        console.log(giftValue.error)
    }

    for (const bucket of transactionQuotas) {
        const { minQuota, maxQuota, businessCost, teamCost } = bucket;

        giftValue.transaction += calcBucket(minQuota * 1000, maxQuota * 1000, (reservedTransactions * 1000) + giftedTransactions, reservedTransactions * 1000, plan === "Business" ? businessCost : teamCost);

        console.log(giftValue.transaction)
    }

    for (const bucket of replayQuotas) {
        const { minQuota, maxQuota, businessCost, teamCost } = bucket;
        console.log("Reserved Replays", reservedReplays)
        console.log("Gifted Replays", giftedReplays)
        // console.log("Accepted Replays", acceptedReplays)
        console.log("busines cost", businessCost)
        console.log("team cost", teamCost)

        giftValue.replay += calcBucket(minQuota * 1000, maxQuota * 1000, (reservedReplays * 1000) + giftedReplays, reservedReplays * 1000, plan === "Business" ? businessCost : teamCost);

        console.log(giftValue.replay)
    }

    return giftValue.transaction + giftValue.error + giftValue.replay;
};

