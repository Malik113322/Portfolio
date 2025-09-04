import React, { useState } from 'react';
import Header, {HeaderPhone} from "./component/Header";

import Home from './component/Home';
import Work from './component/Work';
import Services from './component/Services';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { Toaster } from 'react-hot-toast';
import Skills from './component/Skills';


const App = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Skills/>
      <Work />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </>
  )
}

export default App;
