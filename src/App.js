// import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Shop from './pages/Shop';
import Collections from './pages/Collection';
import Service from './pages/Service';
import About from './pages/About';
import Community from './pages/Community';
import Main from './pages/Main';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Collections" element={<Collections />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/About" element={<About />} />
          <Route path="/Community" element={<Community />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
