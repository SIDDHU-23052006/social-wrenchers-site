import { Switch, Route, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

/* ---- GLOBAL COMPONENTS ---- */
import Chatbot from "@/components/Chatbot";
import PageLoader from "@/components/PageLoader";

/* ---------------- ROUTER ---------------- */
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

/* ---------------- APP ---------------- */
function App() {

  // Detect page navigation
  const [location] = useLocation();

  // Loader state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // show loader every navigation
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds loader

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>

        {/* GLOBAL LOADER (TOP MOST LAYER) */}
        <PageLoader visible={loading} />

        {/* Toast Notifications */}
        <Toaster />

        {/* Website Pages */}
        <Router />

        {/* Floating AI Assistant (Global) */}
        <Chatbot />

      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;