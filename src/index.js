// proyecto NASA con backend y frontend
// https://github.com/TheBridge-FullStackDeveloper/fs-ft-sev-sep22-syllabus/blob/main/teoria/react/nasa.md

import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router/roots"
import {RouterProvider} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);