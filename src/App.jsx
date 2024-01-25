// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Head from "./pages/Header"
function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="mx-3">
        <h2>I'm going to style all of this when i'm ready to use it I dont have enought time to add my matrix terminal theme</h2>
        <Outlet />
      </main>
    </>
  );
}

export default App;
