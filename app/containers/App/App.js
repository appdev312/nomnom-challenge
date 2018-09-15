import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import RecipeList from 'containers/RecipeList/Loadable';
import RecipeDetail from 'containers/RecipeDetail';
import NotFoundPage from 'containers/NotFoundPage';

import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <Switch>
      <Route exact path="/" component={RecipeList} />
      <Route exact path="/:id" component={RecipeDetail} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
