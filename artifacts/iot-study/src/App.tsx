import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Layout } from "@/components/Layout";
import Dashboard from "@/pages/Dashboard";
import Chapter from "@/pages/Chapter";
import Quiz from "@/pages/Quiz";
import PdfViewer from "@/pages/PdfViewer";
import Flashcards from "@/pages/Flashcards";
import Glossary from "@/pages/Glossary";
import Practicals from "@/pages/Practicals";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/chapter/:id" component={Chapter} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/flashcards" component={Flashcards} />
        <Route path="/glossary" component={Glossary} />
        <Route path="/practicals" component={Practicals} />
        <Route path="/pdfs" component={PdfViewer} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
