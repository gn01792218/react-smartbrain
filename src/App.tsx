import { lazy, Suspense} from 'react';
import NavBar from './component/NavBar'
import Home from './view/Home'
import { Routes, Route } from "react-router-dom";

function App() {
  const About = lazy(() => import('./view/About'))
  const Sigin = lazy(()=>import('./view/Regester'))
  const Login = lazy(()=>import('./view/Login'))
  return (
    <div className="w-full h-screen App p-10 bg-orange-800">
      <NavBar />
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Sigin" element={<Sigin/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
