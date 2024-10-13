import ReactDom from "react-dom/client"
import App from "./App"
import Success from "./success"
import Fail from "./Fail"
import {BrowserRouter,Route,Routes} from "react-router-dom"
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/success" element={<Success/>}></Route>
    <Route path="/Fail" element={<Fail/>}></Route>
  </Routes>
  </BrowserRouter>
  
)