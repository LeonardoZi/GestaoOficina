import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import 'bootstrap/dist/css/boostrap.main.css'
import 'bootstrap-icons/'

function App() {


  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="" element={<Dashboard/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
