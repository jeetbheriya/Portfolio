import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor'; // Import CustomCursor
import Home from './pages/Home';
import { ReactLenis } from '@studio-freight/react-lenis'; // Import ReactLenis
import Snowfall from 'react-snowfall'; // Import Snowfall

import './App.css';
import 'lenis/dist/lenis.css'; // Import lenis styles

function App() {
  return (
    <Router>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.4 }}>
        <Snowfall 
          snowflakeCount={75} // Reduced density
          style={{ 
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: -1, // Ensure it stays in the background
          }} 
        />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        {/* Placeholder for other global components to be migrated */}
        {/* <Footer /> */}
        <CustomCursor />
        {/* <Preloader /> */}
        {/* <ScrollProgressIndicator /> */}
        {/* <ParticleBackground /> */}
        {/* <StickyEmail /> */}
      </ReactLenis>
    </Router>
  );
}

export default App;
