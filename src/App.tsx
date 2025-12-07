import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IdentidadeVisual from "./pages/IdentidadeVisual";
import SocialMedia from "./pages/SocialMedia";
import Reels from "./pages/Reels";
import CardsCarrosseis from "./pages/CardsCarrosseis";
import Embalagem from "./pages/Embalagem";
import Impressos from "./pages/Impressos";
import Branding from "./pages/Branding";
import TrafegoPago from "./pages/TrafegoPago";
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
          <Route path="/identidade-visual" element={<IdentidadeVisual />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/cards-carrosseis" element={<CardsCarrosseis />} />
          <Route path="/embalagem" element={<Embalagem />} />
          <Route path="/impressos" element={<Impressos />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/trafego-pago" element={<TrafegoPago />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
