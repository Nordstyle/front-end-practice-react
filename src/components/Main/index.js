import React from 'react';
import { Route } from 'react-router-dom';

import About from './../Pages/About';
import Users from './../Pages/Users';

function Main() {
  return (
    <>
      <Route path="/" exact component={ About } />
      <Route path="/users" component={ Users } />
    </>
  );
}

export default Main;