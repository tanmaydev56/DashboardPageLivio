
// import Linegraph from "./components/Line.jsx"


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TheDashboard from "./Pages/TheDashboard.jsx"
import AnalyticsPage from "./Pages/AnalyticsPage.jsx"

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<TheDashboard/>}/>
        <Route path="/analytics" element={<AnalyticsPage/>}/>
      </Routes>

    </Router>
     {/* <Dashboard/> */}
     {/* <TheDashboard/> */}
     {/* <Linegraph/> */}
 

   
    
   

    </>
  )
}

export default App
