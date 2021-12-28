import './App.css';
import Header from './components/commons/Header/Header';
import SideBar from './components/commons/SideBar/SideBar';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/notfound/NotFound';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header/>
        <SideBar/>
        <Routes>
            <Route path='/user/:id' element={<Dashboard/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
