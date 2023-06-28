import React from 'react';
import Tetris from './components/Tetris';
import BackgroundMusic from './components/Music';
import Home from './src1/Home'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// const tetri = () => {
//   return(
//     <>
//       <Tetris />
//       <BackgroundMusic />
//     </>
//   );
// }

const App = () => (
  <div className="App">
    <Home />
    <Tetris />
    {/* <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/tetris" component={Tetris} />
      </div>
    </Router> */}
  </div>
);

export default App;