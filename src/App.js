import LayoutComponent from './components/LayoutComponent';
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Notepad from './pages/Notepad';
import Info from './pages/Info';

import './App.scss';

function App() {
  
  return (
      <div className="wrapper">
        <div className="content">
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/notepad" element={<Notepad/>}/>
            <Route path="/info" element={<Info/>}/>
          </Routes>
        </LayoutComponent>
        </div>
      </div>
  );
}

export default App;
