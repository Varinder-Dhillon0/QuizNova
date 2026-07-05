import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../assets/styles/globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ToastProvider from "@context/ToastContext";
import AuthProvider from "@context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ToastProvider>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
);
