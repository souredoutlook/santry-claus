import { useState } from "react"

import Slider from "./components/Slider"
import RadioList from "./components/RadioList";
import Input from "./components/Input";

import { RESERVED_EVENTS, PLAN_OPTIONS } from "./constants/ORG_DETAILS";
import { EVENT_CONSTANTS } from "./constants/EVENT_CONSTANTS";
import './App.css';

export default function App() {

  const [giftDetails, setGiftDetails] = useState({
    plan: "Team",
    cycle: "Monthly",
    reservedErrors: 50,
    acceptedErrors: 0,
    reservedTransactions: 100,
    acceptedTransactions: 0,
    giftedErrors: 0,
    giftedTransactions: 0,
  });

  return (
    <div className="App">
      <h1>Santry Claus</h1>
      <div className="card--org-details">
        <RadioList
          type={PLAN_OPTIONS.plan}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
        />
        <RadioList 
          type={PLAN_OPTIONS.cycle}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
        />
        <Slider 
          type={RESERVED_EVENTS.errors}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
        />
        <Input 
          type={EVENT_CONSTANTS.acceptedErrors}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
        />
        <Slider 
          type={RESERVED_EVENTS.transactions}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
        />
        <Input 
          type={EVENT_CONSTANTS.acceptedTransactions}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
        />
      </div>
      <div className="card--gifted-events">
        <Input 
          type={EVENT_CONSTANTS.giftedErrors}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
        />
        <Input
          type={EVENT_CONSTANTS.giftedTransactions}
          giftDetails={giftDetails}
          setGiftDetails={setGiftDetails}
        />
      </div>
      <div className="card--computed-values">

      </div>
    </div>
  );
};
