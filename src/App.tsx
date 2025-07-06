
import './App.css';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';

/* Add different styles selector, Brutalism, Minimalism, Fridge */
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;