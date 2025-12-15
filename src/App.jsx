import { BrowserRouter, Route, Routes } from "react-router"
import Body from "./components/Body"
import Hero from "./components/hero/Hero"
import Login from "./components/auth/Login"

function App() {


  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}>
        <Route index element={<Hero/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
