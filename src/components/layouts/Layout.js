import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from './Nav';

const Layout = () => (
  <div>
    <Nav />
    <main className="App">
      <Outlet />
    </main>
  </div>
);

export default Layout;
