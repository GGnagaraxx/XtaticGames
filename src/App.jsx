import { Route, Router, Routes } from "react-router-dom"
import { routes } from "./assets/data/webRoutes"


function App() {
  
  const routerMap = routes.map((r, key) => 
      <Route key={key} path={r.path} Component={r.component}/>
    )

  return (
    <>
      <Routes>
        {routerMap}
      </Routes>
    </>
  )
}

export default App
