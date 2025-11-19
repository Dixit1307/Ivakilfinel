import { useState } from "react";
import { IPHeader } from "./components/IPHeader";
import { IPPremiumFooter } from "./components/IPPremiumFooter";
import { FloatingConsultButton } from "./components/FloatingConsultButton";
import { IPPremiumHomePage } from "./pages/IPPremiumHomePage";
import { IPAboutPage } from "./pages/IPAboutPage";
import { IPCategoryPage } from "./pages/IPCategoryPage";
import { IPServiceDetailPage } from "./pages/IPServiceDetailPage";
import { IPPremiumBlogPage } from "./pages/IPPremiumBlogPage";
import { IPPremiumContactPage } from "./pages/IPPremiumContactPage";
import { BiotechnologyPage } from "./pages/Biotechnologypage";



export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [pageParams, setPageParams] = useState<{ [key: string]: string }>({});

  const handleNavigation = (page: string) => {
    // Parse page navigation
    // Format: "home" | "about" | "category/slug" | "service/categorySlug/serviceSlug" | "blog" | "contact"
    
    if (page.startsWith("category/")) {
      const categorySlug = page.replace("category/", "");
      setCurrentPage("category");
      setPageParams({ categorySlug });
    } else if (page.startsWith("service/")) {
      const parts = page.replace("service/", "").split("/");
      setCurrentPage("service");
      setPageParams({ categorySlug: parts[0], serviceSlug: parts[1] });
    } else {
      setCurrentPage(page);
      setPageParams({});
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
  switch (currentPage) {
    case "home":
      return <IPPremiumHomePage onNavigate={handleNavigation} />;
    case "about":
      return <IPAboutPage />;
    case "category":
      // If categorySlug is "biotechnology", render the BiotechnologyPage
      if (pageParams.categorySlug === "biotechnology") {
        return <BiotechnologyPage />;
      }
      return <IPCategoryPage categorySlug={pageParams.categorySlug} onNavigate={handleNavigation} />;
    case "service":
      return (
        <IPServiceDetailPage
          categorySlug={pageParams.categorySlug}
          serviceSlug={pageParams.serviceSlug}
          onNavigate={handleNavigation}
        />
      );
    case "blog":
      return <IPPremiumBlogPage />;
    case "contact":
      return <IPPremiumContactPage />;
    default:
      return <IPPremiumHomePage onNavigate={handleNavigation} />;
  }
};


  return (
    <div className="min-h-screen bg-white">
      <IPHeader onNavigate={handleNavigation} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <IPPremiumFooter onNavigate={handleNavigation} />
      <FloatingConsultButton />
    </div>
  );
}
