import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { Fragment } from 'react/jsx-runtime';
import { Navbar } from './components/layout/Navbar';
import { Landing } from './components/layout/Landing';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/register' element={<Layout><Register /></Layout>} />
          <Route exact path='/login' element={<Layout><Login /></Layout>} />
        </Routes>
      </Fragment>
    </Router>
    
  );
}

export default App;
