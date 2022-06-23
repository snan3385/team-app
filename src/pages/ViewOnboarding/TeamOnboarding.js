import React, { useEffect, useState } from "react";
import "./TeamOnboarding.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../data/actions";

import axios from "axios";
import CustomTable from "../../components/CustomTables/CustomTable";
import Button from "@material-ui/core/Button";

const componentOriginalRows = [
  {
    name: "Kevin",
    createdBy: "sandbox",
    lastModDate: 1234524,
    reqState: "Pending",
  },
  {
    name: "Nanayakkara",
    createdBy: "dev",
    lastModDate: 6987465,
    reqState: "Pending",
  },
  {
    name: "Luvi",
    createdBy: "sandbox",
    lastModDate: 6876244,
    reqState: "Approved",
  },
  {
    name: "Abydeera",
    createdBy: "sandbox",
    lastModDate: 9876465,
    reqState: "Pending",
  },
  {
    name: "Harry",
    createdBy: "dev",
    lastModDate: 8476254,
    reqState: "Pending",
  },
  {
    name: "Charles",
    createdBy: "sandbox",
    lastModDate: 3546274,
    reqState: "Approved",
  },
];

const comTableHeaders = [
  "Team Name",
  "Created By",
  "Last Modified Date",
  "State",
];

export default function TeamOnboarding() {
  const [originalRows, setOriginalRows] = useState(componentOriginalRows);
  const [tableHeaders, setTableHeaders] = useState(comTableHeaders);
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const api = axios.create({
    baseURL: `https://api-gateway-bff-sbx.sysco.com/event-platform-team-onboarding-api/onboard/teams?status=0`,
    headers: {
      // Authorization: "Bearer KXJwrw3JlKDhlPArZALZmrPZ97ju",
      // "Access-Control-Allow-Credentials": "true",
      Authorization: `Bearer 6Rhu0tbpFkujGVCe2hsg4GbchdYW`,
    },
  });

  const getTeams = async () => {
    try {
      let data = await api.get("onboard/teams").then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data);
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <>
      <CustomTable
        originalRows={originalRows}
        tableHeaders={tableHeaders}
        tableHeaderColor="info"
      />
      <div style={{ marginLeft: "400px" }}>
        <button className="btn-gradient" onClick={getTeams}>
          check
        </button>
        {/*<div>counter : {counter}</div>*/}
        {/*<button onClick={() => dispatch(increment(5))}>+</button>*/}
        {/*<button onClick={() => dispatch(decrement())}>-</button>*/}
        {/*<div>logged : {isLogged.toString()}</div>*/}
        <Button variant="contained" color="primary" className="m-2">
          <span className="btn-wrapper--icon">
            {/*<FontAwesomeIcon icon={["far", "lightbulb"]} />*/}
          </span>
          <span className="btn-wrapper--label">Left icon</span>
        </Button>
      </div>
    </>
  );
}
