import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { Layout } from './hoc';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout';
import Orders from './containers/Orders'
class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <Layout>
            <Route path='/' exact component={BurgerBuilder} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/orders' component={Orders} />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
