import App from "@/App.tsx";
import { ThemeProvider } from "@/components/theme-provider";
import UserContextProvider from "@/context/userContextProvider.tsx";
import "@/index.css";
import { store } from "@/store.ts";
import axios from "axios";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = "https://blog-fawn-beta.vercel.app";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <UserContextProvider>
            <BrowserRouter>
                <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                    <App />
                    <Toaster />
                </ThemeProvider>
            </BrowserRouter>
        </UserContextProvider>
    </Provider>
);
