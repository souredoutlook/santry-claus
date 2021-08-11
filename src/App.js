import { useState } from "react"

import Slider from "./components/Slider"
import RadioList from "./components/RadioList";
import Input from "./components/Input";

import { RESERVED_EVENTS, PLAN_OPTIONS } from "./constants/ORG_DETAILS";
import './App.css';

export default function App() {

  const [orgDetails, setOrgDetails] = useState({
    plan: "Team",
    cycle: "Monthly",
    reservedErrors: 50,
    acceptedErrors: 0,
    reservedTransactions: 100,
    acceptedTransactions: 0,
  });

  return (
    <div className="App">
      <h1>Santry Claus</h1>
      <div className="card--org-details">
        <RadioList
          type={PLAN_OPTIONS.plan}
          orgDetails={orgDetails}
          setOrgDetails={setOrgDetails}
        />
        <RadioList 
          type={PLAN_OPTIONS.cycle}
          orgDetails={orgDetails}
          setOrgDetails={setOrgDetails}
        />
        <Slider 
          type={RESERVED_EVENTS.errors}
          orgDetails={orgDetails}
          setOrgDetails={setOrgDetails}
        />
        <Input 
          type={"Accepted Errors"}
          orgDetails={orgDetails}
          setOrgDetails={setOrgDetails}
        />
        <Slider 
          type={RESERVED_EVENTS.transactions}
          orgDetails={orgDetails}
          setOrgDetails={setOrgDetails}
        />
        <Input 
          type={"Accepted Transactions"}
          orgDetails={orgDetails}
          setOrgDetails={setOrgDetails}
        />
      </div>
      <div className="card--gifted-events">

      </div>
      <div className="card--computed-values">

      </div>
    </div>
  );
};
