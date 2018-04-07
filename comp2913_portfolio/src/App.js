import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ToDoController from './components/todo-app/ToDoController';
import StopWatch from './components/stopwatch-app/StopWatch';
import WeatherForm from './components/weather-app/WeatherForm';
import RockPaperScissor from './components/rock-paper-scissor-app/Game';
import ProjectsDescription from './components/ProjectsDescription';
import NotFound from './components/NotFound';

class App extends Component {
  
  render() {

    const StopWatchApp = () => {
      return (<StopWatch increment="100" />);
    }

    const Projects = ({match}) => {
      return (
          <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item"><OldSchoolMenuLink to={`${match.url}/todo-app`} label="Todo app" /></li>
                <li class="nav-item"><OldSchoolMenuLink to={`${match.url}/stopwatch-app`} label="Stopwatch app"  /></li>
                <li class="nav-item"><OldSchoolMenuLink to={`${match.url}/weather-app`} label="Weather app" /></li>
                <li class="nav-item"><OldSchoolMenuLink to={`${match.url}/rock-paper-scissor`} label="Rock Paper Scissor app" /></li>
              </ul>
            </div>
            <Switch>
              <Route exact path={`${match.url}`} render={()=>{ return<h2>Projects</h2>}} />
              <Route path={`${match.url}/todo-app`} component={ToDoController} />
              <Route path={`${match.url}/stopwatch-app`} component={StopWatchApp} />
              <Route path={`${match.url}/weather-app`} component={WeatherForm} />
              <Route path={`${match.url}/rock-paper-scissor`} component={RockPaperScissor} />
              <Route component={NotFound} />
            </Switch>
            <ProjectsDescription />
          </div>
      );
    }

    /** from https://reacttraining.com/react-router/web/example/custom-link */
    const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
          <div >
            <Link to={to}><a className={match ? "nav-link active" : "nav-link"} href="#">{label}</a></Link>
          </div>
        )}
      />
    );



    return (
      <Router>
        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item"><OldSchoolMenuLink to="/" label="Home" activeOnlyWhenExact={true} /></li>
              <li class="nav-item"><OldSchoolMenuLink to="/projects" label="Projects"  /></li>
            </ul>
          </div>
          
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route component={NotFound} />
        </Switch>
        </div> 
    </Router>
      
    );
  }
}

export default App;
