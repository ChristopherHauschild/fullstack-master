import React from "react";

import "../css/styles.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <h1 className="bg-red-300 p-8 text-center">MyApp</h1>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
