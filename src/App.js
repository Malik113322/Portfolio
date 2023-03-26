import React, { useState } from 'react';
import Header, {HeaderPhone} from "./component/Header";

import Home from './component/Home';
import Work from './component/Work';
import Timeline from './component/Timeline';
import Services from './component/Services';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { Toaster } from 'react-hot-toast';


const App = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen)
  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </>
  )
}

export default App;
