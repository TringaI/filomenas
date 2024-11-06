import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Pages/Home/Index'
import Shop from './Pages/Shop/Index'
import ItemDetail from './Pages/Shop/ItemDetail'
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path='/:filename'element={<ItemDetail/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
