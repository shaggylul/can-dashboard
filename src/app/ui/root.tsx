import { Dashboard } from "@/widgets/dec-dashboard/ui/dashboard";

import "../styles/globals.css";
import { ThemeProvider } from "./provider-theme";
import { Layout } from "./layout";

export const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
};
