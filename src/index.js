import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./Navbar/Store/AuthContext";
import "./index.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthContextProvider>
);


