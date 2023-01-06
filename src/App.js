import "./App.css";
import NavTabs from "./components/NavTabs";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is.
  // Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Experience") {
      return <Experience />;
    }
    return <Contact />;
  };

  // changes the value of the state
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      {/* Here we are calling the renderPage method which will return a component  */}
      {/* {renderPage()} */}
    </div>
  );
}

export default App;
