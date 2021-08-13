import { transactionQuotas, transactionOnDemand, errorQuotas, errorOnDemand } from "../constants/PLANS";

export const computeOnDemand = function(giftDetails) {
    const { reservedErrors, acceptedErrors, giftedErrors, reservedTransactions, acceptedTransactions, giftedTransactions, plan } = giftDetails;

    const computedReservedErrors = (reservedErrors * 1000) + giftedErrors;
    const computedReservedTransactions = (reservedTransactions * 1000) + giftedTransactions;
    const onDemand = {transaction: 0, error: 0}

    if (computedReservedErrors < acceptedErrors) {
        console.log("inside condition")
        for (const bucket of errorOnDemand) {
            console.log("bucket: ", bucket)
            const { minQuota, maxQuota, businessCost, teamCost } = bucket;
            console.log(computedReservedErrors, acceptedErrors)

            if (computedReservedErrors <= (minQuota * 1000) && (acceptedErrors > (minQuota * 1000) && acceptedErrors > (maxQuota * 1000))) {
                onDemand.error += ((maxQuota - minQuota) * 1000) * (plan === "Business" ? businessCost : teamCost);
            } else if (computedReservedErrors > (minQuota * 1000) && (acceptedErrors > (minQuota * 1000) && acceptedErrors <= (maxQuota * 1000))) {
                onDemand.error += (acceptedErrors - computedReservedErrors) * (plan === "Business" ? businessCost : teamCost);
            } else if (computedReservedErrors >= (minQuota * 1000) && computedReservedErrors < (maxQuota * 1000) && (acceptedErrors > (minQuota * 1000) && acceptedErrors > (maxQuota * 1000))) {
                onDemand.error += ((maxQuota * 1000) - computedReservedErrors) * (plan === "Business" ? businessCost : teamCost);
            } else if (computedReservedErrors <= (minQuota * 1000) && (acceptedErrors > (minQuota * 1000) && acceptedErrors <= (maxQuota * 1000))) {
                onDemand.error += (acceptedErrors - (minQuota * 1000)) * (plan === "Business" ? businessCost : teamCost);
            }
            console.log(onDemand.error)
        };
    };

    if (computedReservedTransactions < acceptedTransactions) {
        console.log("inside condition")
        for (const bucket of transactionOnDemand) {
            console.log("bucket: ", bucket)
            const { minQuota, maxQuota, businessCost, teamCost } = bucket;
            console.log(computedReservedTransactions, acceptedTransactions)
    
            if (computedReservedTransactions <= (minQuota * 1000) && (acceptedTransactions > (minQuota * 1000) && acceptedTransactions > (maxQuota * 1000))) {
                console.log("inside condition 1")
                onDemand.transaction += ((maxQuota - minQuota) * 1000) * (plan === "Business" ? businessCost : teamCost);
            } else if (computedReservedTransactions > (minQuota * 1000) && (acceptedTransactions > (minQuota * 1000) && acceptedTransactions <= (maxQuota * 1000))) {
                console.log("inside condition 2")
                onDemand.transaction += (acceptedTransactions - computedReservedTransactions) * (plan === "Business" ? businessCost : teamCost);
            } else if (computedReservedTransactions > (minQuota * 1000) && computedReservedTransactions < (maxQuota * 1000) && (acceptedTransactions > (minQuota * 1000) && acceptedTransactions > (maxQuota * 1000))) {
                console.log("inside condition 2.5")
                onDemand.transaction += ((maxQuota * 1000) - computedReservedTransactions) * (plan === "Business" ? businessCost : teamCost);
            } else if (computedReservedTransactions <= (minQuota * 1000) && (acceptedTransactions > (minQuota * 1000) && acceptedTransactions <= (maxQuota * 1000))) {
                console.log("inside condition 3")
                onDemand.transaction += (acceptedTransactions - (minQuota * 1000)) * (plan === "Business" ? businessCost : teamCost);
            }
            console.log(onDemand.transaction)
        };
    };


    return onDemand.transaction + onDemand.error;
};

export const computeGiftValue = function(giftDetails) {
    const { reservedErrors, acceptedErrors, giftedErrors, reservedTransactions, acceptedTransactions, giftedTransactions, plan } = giftDetails;

    const computedReservedErrors = (reservedErrors * 1000) + giftedErrors;
    const computedReservedTransactions = (reservedTransactions * 1000) + giftedTransactions;
    const giftValue = {transaction: 0, error: 0}

    for (const bucket of errorQuotas) {
        const { minQuota, maxQuota, businessCost, teamCost } = bucket;

        if ((reservedErrors * 1000) <= (minQuota * 1000) && (computedReservedErrors > (minQuota * 1000) && computedReservedErrors > (maxQuota * 1000))) {
            giftValue.error += ((maxQuota - minQuota) * 1000) * (plan === "Business" ? businessCost : teamCost);
        } else if ((reservedErrors * 1000) > (minQuota * 1000) && (computedReservedErrors > (minQuota * 1000) && computedReservedErrors <= (maxQuota * 1000))) {
            giftValue.error += (computedReservedErrors - (reservedErrors * 1000)) * (plan === "Business" ? businessCost : teamCost);
        } else if ((reservedErrors * 1000) <= (minQuota * 1000) && (computedReservedErrors > (minQuota * 1000) && acceptedErrors <= (maxQuota * 1000))) {
            giftValue.error += (computedReservedErrors - (minQuota * 1000)) * (plan === "Business" ? businessCost : teamCost);
        }
    };
    
    for (const bucket of transactionQuotas) {
        const { minQuota, maxQuota, businessCost, teamCost } = bucket;

        if ((reservedTransactions * 1000) <= (minQuota * 1000) && (computedReservedTransactions > (minQuota * 1000) && computedReservedTransactions > (maxQuota * 1000))) {
            console.log("inside condition 1")
            giftValue.transaction += ((maxQuota - minQuota) * 1000) * (plan === "Business" ? businessCost : teamCost);
        } else if ((reservedTransactions * 1000) > (minQuota * 1000) && (computedReservedTransactions > (minQuota * 1000) && computedReservedTransactions <= (maxQuota * 1000))) {
            console.log("inside condition 2")
            giftValue.transaction += (computedReservedTransactions - (reservedTransactions * 1000)) * (plan === "Business" ? businessCost : teamCost);
        } else if ((reservedTransactions * 1000) <= (minQuota * 1000) && (computedReservedTransactions > (minQuota * 1000) && computedReservedTransactions <= (maxQuota * 1000))) {
            console.log("inside condition 3")
            giftValue.transaction += (computedReservedTransactions - (minQuota * 1000)) * (plan === "Business" ? businessCost : teamCost);
        }
    };

    return giftValue.transaction + giftValue.error;
};

