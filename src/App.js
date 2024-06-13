import logo from './logo.svg';
import './App.css';
import { AllRoutes } from "./routes/AllRoutes";
import { Header } from './components/Header';
import {  Footer  } from "./components/Footer";
import debounce from "lodash.debounce";
import { useState, useCallback } from "react";


function App() {
  const [queryTerm, setQueryTerm] = useState("");

  const handleSearch = useCallback(
    debounce((term) => {
      setQueryTerm(term);
    }, 300),
    []
  );
  return (
    <div className="App dark:bg-slate-800">
      <Header onSearch={handleSearch}/>
      <AllRoutes queryTerm={queryTerm}/>
      <Footer/>
    </div>
  );
}

export default App;
