import { Route,Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Mainlayout from "./layout/main";
import Home from "./component/home";
import About from "./component/about";
import Portfolio from "./component/portfolio";
import Contact from "./component/contact";
import { useLocation } from "react-router-dom";
import { createContext,useState,useEffect } from "react";
export const Darkmode = createContext()
function App() {
  const location = useLocation()
  const storedDarkmode = localStorage.getItem("darkmode");
  const [darkmode, setdarkmode] = useState(storedDarkmode ? JSON.parse(storedDarkmode) : false);
  
  const updateDarkmode = (value) => {
    localStorage.setItem("darkmode", JSON.stringify(value));
    setdarkmode(value);
  };

  // Watch for changes in darkmode and update local storage
  useEffect(() => {
    updateDarkmode(darkmode);
  }, [darkmode]);
  return (
    <div className="App">
       <Darkmode.Provider value={{darkmode, setdarkmode: updateDarkmode}}>
        <AnimatePresence initial={true} mode="wait">
          <Routes key={location.pathname} location={location}>
           <Route path="/" element={<Mainlayout/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>}/>
            <Route path="portfolio" element={<Portfolio/>}/>
            <Route path="contact" element={<Contact/>}/>
             </Route>
          </Routes>
        </AnimatePresence>
        </Darkmode.Provider>
    </div>
  );
}

export default App;
