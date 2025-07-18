import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Browse from "./pages/Browse";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import AddItem from "./pages/AddItem";
import ItemDetail from "./pages/ItemDetail";
import Admin from "./pages/Admin";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
