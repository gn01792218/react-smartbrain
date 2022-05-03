import { lazy, Suspense } from 'react';
import Nav from './component/Nav'
import Home from './view/Home'
import { Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
function App() {
  const About = lazy(() => import('./view/About'))
  return (
    <div className="w-full h-screen App p-10 bg-orange-800">
      <Particles
      id="tsparticles"
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 1,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
      />
      <Nav />
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
