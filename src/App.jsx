import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import Layout from "./components/Layout/Layout";
import FAQ from "./components/FAQ/FAQ";

function App() {

  return (
    <Router>
      <Layout>
        <FAQ />
      </Layout>
    </Router>
  )
}

export default App;
