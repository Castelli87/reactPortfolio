import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Concacts from "./components/Concact";
import "./App.css";
import Footer from "./components/Footer";
import ReactGA from "react-ga4";
import { useEffect, useState } from "react";

ReactGA.initialize("G-KP91Y8SY8S");

function App() {
  useEffect(() => {
    // Send pageview with a custom path
    ReactGA.send({
      hitType: "pageview",
      page:window.location.pathname + window.location.search ,
      title: "Home page",
    });
  }, []);
  const [theme, setTheme] = useState("light");

  return (
    <main className="p-6 dark:bg-slate-800 dark:text-white">
      <Header theme={theme} setTheme={setTheme} />
      <Home />
      <AboutMe />
      <Projects />
      <Concacts />
      <Footer />
    </main>
  );
}

export default App;
