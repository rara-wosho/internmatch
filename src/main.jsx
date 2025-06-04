import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <div className="main mx-auto" style={{ maxWidth: 2300 }}>
                    <App />
                </div>
            </BrowserRouter>
        </AuthProvider>
    </StrictMode>
);
