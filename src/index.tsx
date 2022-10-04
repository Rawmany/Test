import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom/client";
import Entry from "./Entry";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Entry />
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
