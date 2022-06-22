import React, { useState } from "react";

import CustomTable from "../../components/CustomTables/CustomTable";
const componentOriginalRows = [
  {
    name: "Enterprise Platform",
    serviceAccount: "sa_epe",
    cluster: "sandbox",
    email: "Kevin@ss.com",
  },
  {
    name: "Team Canada",
    serviceAccount: "sa_canada",
    cluster: "dev",
    email: "Nanayakkara@ss.com",
  },
  {
    name: "Talent aqusition",
    serviceAccount: "sa_talent",
    cluster: "sandbox",
    email: "Luvi@ss.com",
  },
];

const comTableHeaders = [
  "Team Name",
  "Service Account",
  "Onboarded Environments",
  "Email",
];

export default function ProdRequestOnboarding() {
  const [originalRows, setOriginalRows] = useState(componentOriginalRows);
  const [tableHeaders, setTableHeaders] = useState(comTableHeaders);

  return (
    <>
      <CustomTable originalRows={originalRows} tableHeaders={tableHeaders} />
    </>
  );
}
