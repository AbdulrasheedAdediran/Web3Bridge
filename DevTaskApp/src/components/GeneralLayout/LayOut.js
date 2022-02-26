import React from "react";


function LayOut() {
  return (
    <div className="wrapper" style={{ display: "flex" }}>
      <Sidebar />
      <div className="main">
        <Header />
        <main className="contents">{props.children}</main>
      </div>
    </div>
  );
}

export default LayOut;
