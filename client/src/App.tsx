import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import IPhoneRepair from "./pages/IPhoneRepair";
import SamsungRepair from "./pages/SamsungRepair";
import TabletRepair from "./pages/TabletRepair";
import ConsoleRepair from "./pages/ConsoleRepair";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/iphone-repair" component={IPhoneRepair} />
        <Route path="/samsung-repair" component={SamsungRepair} />
        <Route path="/tablet-repair" component={TabletRepair} />
        <Route path="/console-repair" component={ConsoleRepair} />
        <Route path="/quote" component={Quote} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
