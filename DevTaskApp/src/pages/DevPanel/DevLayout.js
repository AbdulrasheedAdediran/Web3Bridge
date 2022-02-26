import React from 'react';
 import Header from '../../components/GeneralLayout/Header';
import '../../styles/layouts/Layouts.css';
import DevSidebar from '../DevPanel/DevSidebar';


function DevLayout({children}){
    return (
        <div className="wrapper">
        <DevSidebar />
        <div className="main">
          <Header icon={1} />
          <main className="contents">{children}</main>
        </div>
      </div>
    )
}

export default DevLayout;