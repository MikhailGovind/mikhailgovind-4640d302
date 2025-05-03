
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // This is to ensure that when users land on the Index page,
    // they are properly routed to the Home page while maintaining clean URLs
    if (window.location.pathname === "/") {
      // Already at home, just render the Home component
    } else {
      navigate("/", { replace: true });
    }
  }, [navigate]);
  
  return <Home />;
};

export default Index;
