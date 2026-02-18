import React from "react";
import ReactDOM from "react-dom";
import App from "@/app/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <DonationsProvider>
        <App />
      </DonationsProvider>
    </UserProvider>
  </React.StrictMode>,
);
