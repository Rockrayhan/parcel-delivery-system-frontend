import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "./components/provider/theme-provider";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ReduxProvider store={store}>
        <RouterProvider router={router} />,
        <Toaster />
      </ReduxProvider>
    </ThemeProvider>
  </StrictMode>
);
