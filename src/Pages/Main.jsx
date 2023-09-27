// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Auth/Login";
import NoFound from "../Components/NoFound";
import Home from "./Home";
import { useEffect } from "react";
import { supabase } from "../supabase/client";
function Main() {
  //  <FontAwesomeIcon icon={faHippo} />
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NoFound />} />
    </Routes>
  );
}

export default Main;
