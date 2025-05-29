import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMenuOpen } from './store/uiSlice';

import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

import './index.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const menuOpen = useSelector((state) => state.ui.menuOpen);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${isDark ? 'bg-black text-white' : 'bg-white text-black'} bg-cover bg-center bg-no-repeat`}
      >
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={(val) => dispatch(setMenuOpen(val))}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={(val) => dispatch(setMenuOpen(val))}
        />
        <Home isDark={isDark} />
       

        <About isDark={isDark} />
        <Projects isDark={isDark} />
        <Contact isDark={isDark} />
      </div>
    </>
  );
}

export default App;
