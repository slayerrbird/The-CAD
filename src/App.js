import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routing from './routes/Routing'
import './animate.css'
import { Suspense } from "react";

function App() {
  return (
    <>
    <Router>
      <Suspense fallback={<div> Loading....</div>}>
        <Routing/>
        </Suspense>
        </Router>
    </>
  );
}

export default App;
