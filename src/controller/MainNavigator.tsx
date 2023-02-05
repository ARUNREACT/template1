import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../view/dashboard/Dashboard";
import { Aadhaar } from "../view/dashboardhead/aadhaar-banking/Aadhaar";
import { Aboutus } from "../view/dashboardhead/aboust-us/Aboutus";
import { Dashboardhead } from "../view/dashboardhead/headoption/Dashboardhead";
import { Lending } from "../view/dashboardhead/lending/Lending";
import { Moneytransfer } from "../view/dashboardhead/money-transfer/Moneytransfer";
import { Nepalmoney } from "../view/dashboardhead/nepal/Nepalmoney";
import { Platform } from "../view/dashboardhead/platform/Platform";
import { Retailer } from "../view/dashboardhead/retailer/Retailer";
import { Sellinsurance } from "../view/dashboardhead/sell-insurance/Sellinsurance";
import { Utility } from "../view/dashboardhead/utility-billing-payment/Utility";
import { Dashboardfooter } from "../view/dashboradfooter/Dashboardfooter";

function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboardhead" element={<Dashboardhead />} />
        <Route path="/lending" element={<Lending />} />
        <Route path="/moneytransfer" element={<Moneytransfer />} />
        <Route path="/aadhaar" element={<Aadhaar />} />
        <Route path="/utility" element={<Utility />} />
        <Route path="/sellinsurance" element={<Sellinsurance />} />
        <Route path="/nepalmoney" element={<Nepalmoney />} />
        <Route path="/retailer" element={<Retailer />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/aboutus" element={<Aboutus />} />

        <Route path="/dashboardfooter" element={<Dashboardfooter />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;
