import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import Home from  './pages/home/home.component';
import Education from './pages/education/education.component';
import Projects from './pages/projects/projects.component';
import ContactMe from './pages/contact-me/contact-me.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact-me" component={ContactMe} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
