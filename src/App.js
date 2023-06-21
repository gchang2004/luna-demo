import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet"; //browser tab and icon customization

// Core Function
import { Home, Error, SignIn, NewArrivals } from './pages';

// Men Clothing
import { Men, MenClothing, Tops, Bottoms, Innerwear, Outerwear, Activewear } from './pages';
import { BasicTee } from './pages';

// Women Clothing

const App = () => {
  return (
    <Router> {/* Move the Router component here */}
      <div className="App">
        {/*Website TAB Description*/}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Luna - Voyage On | Modern Collection for Men's & Women's Clothing</title>
          <link rel="canonical" href="https://www.google.com/" />
          <meta name="description" content="© 2023 Luna Inc. All Rights Reserved." />
        </Helmet>

        <Routes>
          <Route exact path="/luna-demo/" element={<Home />} />
          <Route path="/luna-demo/error/" element={<Error />} />
          <Route path="/luna-demo/sign-in/" element={<SignIn />} />
          <Route path="/luna-demo/new-arrivals/" element={<NewArrivals />} />

          {/* Men Clothing */}
          <Route path="/luna-demo/men/" element={<Men />} />
          <Route path="/luna-demo/men/clothing/" element={<MenClothing />} />
          <Route path="/luna-demo/men/clothing/tops/" element={<Tops />} />
          <Route path="/luna-demo/men/clothing/bottoms/" element={<Bottoms />} />
          <Route path="/luna-demo/men/clothing/innerwear/" element={<Innerwear />} />
          <Route path="/luna-demo/men/clothing/outerwear/" element={<Outerwear />} />
          <Route path="/luna-demo/men/clothing/activewear/" element={<Activewear />} />

          <Route path="/luna-demo/men/clothing/tops/basic-tee/" element={<BasicTee />} />

          {/* Women Clothing */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
