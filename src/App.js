import { useState } from "react"

import Slider from "./components/Slider"
import RadioList from "./components/RadioList";
import Input from "./components/Input";

import { RESERVED_EVENTS, PLAN_OPTIONS } from "./constants/ORG_DETAILS";
import { EVENT_CONSTANTS } from "./constants/EVENT_CONSTANTS";
import './App.scss';

export default function App() {

  // Create our number currencyFormatter.
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
  });

  const eventFormatter = new Intl.NumberFormat('en-US')

  const [giftDetails, setGiftDetails] = useState({
    plan: "Team",
    cycle: "Monthly",
    reservedErrors: 50,
    acceptedErrors: 0,
    reservedTransactions: 100,
    acceptedTransactions: 0,
    reservedReplays: 0.5,
    acceptedReplays: 0,
    giftedErrors: 0,
    giftedTransactions: 0,
    giftedReplays: 0,
    onDemand: 0,
    giftValue: 0,
  });

  return (
    <div className="App">
      <header>
        <h1>Santry Claus</h1>
        <img className="santry-hat" src="santry-claus.svg"/>
      </header>
      <div className="card--org-details">
        <h4 className="group-label">Plan:</h4>
        <RadioList
          type={PLAN_OPTIONS.plan}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
        />
        <h4 className="group-label">Contract Term:</h4>
        <RadioList 
          type={PLAN_OPTIONS.cycle}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
        />
        <h4 className="group-label">Errors:</h4>
        <Slider 
          type={RESERVED_EVENTS.errors}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
          eventFormatter={eventFormatter}
        />
        <Input 
          type={EVENT_CONSTANTS.acceptedErrors}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
          eventFormatter={eventFormatter}
        />
        <h4 className="group-label">Transactions:</h4>
        <Slider 
          type={RESERVED_EVENTS.transactions}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
          eventFormatter={eventFormatter}
        />
        <Input 
          type={EVENT_CONSTANTS.acceptedTransactions}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
          eventFormatter={eventFormatter}
        />
        <h4 className="group-label">Replays:</h4>
          <Slider 
            type={RESERVED_EVENTS.replays}
            giftDetails={giftDetails}
            setGiftDetails={setGiftDetails}
            eventFormatter={eventFormatter}
          />
          <Input 
            type={EVENT_CONSTANTS.acceptedReplays}
            giftDetails={giftDetails}
            setGiftDetails={setGiftDetails}
            eventFormatter={eventFormatter}
          />
      </div>
      <div className="card--gifted-events">
        <h4 className="group-label">Gifted Events:</h4>
        <Input 
          type={EVENT_CONSTANTS.giftedErrors}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
          eventFormatter={eventFormatter}
        />
        <Input
          type={EVENT_CONSTANTS.giftedTransactions}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
          eventFormatter={eventFormatter}
        />
        <Input
          type={EVENT_CONSTANTS.giftedReplays}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
          eventFormatter={eventFormatter}
        />
      </div>
      <div className="card--computed-values">
        <h4 className="group-label">Gift Details:</h4>
        <div className="computed--reserved-events">
          <div className="computed-group">
            <span>Total Reserved Errors</span>
            <span>{eventFormatter.format((giftDetails.reservedErrors * 1000) + giftDetails.giftedErrors)}</span>
          </div>
          <div className="computed-group">
            <span>Total Reserved Transactions</span>
            <span>{eventFormatter.format((giftDetails.reservedTransactions * 1000) + giftDetails.giftedTransactions)}</span>
          </div>
          <div className="computed-group">
            <span>Total Reserved Replays</span>
            <span>{eventFormatter.format((giftDetails.reservedReplays * 1000) + giftDetails.giftedReplays)}</span>
          </div>
        </div>
        <div className="computed--on-demand computed-group"> 
          <span>Total On-Demand Spend</span>
          <span>{currencyFormatter.format(giftDetails.onDemand.toFixed(2))}</span>
        </div>
        <div className="computed--gift-value computed-group">
          <span>Gift Value</span>
          <span>{currencyFormatter.format(giftDetails.giftValue.toFixed(2))}</span>
        </div>
      </div>
    </div>
  );
};
