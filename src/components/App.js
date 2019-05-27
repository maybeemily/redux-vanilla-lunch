import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PostById from '../containers/posts/PostById';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/posts/:id" component={PostById} />
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}
