import React from 'react';
import { Route } from 'react-router-dom';

import About from './../Pages/About';

function Main() {
  return (
    <>
      <Route path="/" exact component={ About } />
      <Route path="/users" component={ About } />
    </>
  );
}

export default Main;