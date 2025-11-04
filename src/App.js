import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Join from './pages/Join';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="Join" element={<Join/>}/>
      </Route>
    </Routes>
  );
}

export default App;