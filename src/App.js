import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Info from './pages/Info/Info';
import Basket from './pages/Basket/Basket';
import Product from './pages/Product/Product';
import NoMatch from './pages/NoMatch/NoMatch';

const App = () => {
  return (
    <BrowserRouter basename={'R05'}>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
