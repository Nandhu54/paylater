import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function RootLayout() {
  return (
    <div>
      <div style={{ minHeight: '80vh', padding: '0px' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
