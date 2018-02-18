import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchTvshowData, fetchEpisodesData } from './actions'
import TvshowHeader from './components/TvshowHeader'
import TvshowFooter from './components/TvshowFooter'
import EpisodesSidebar from './components/EpisodesSidebar'
import { Route, Redirect } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.retrieveTvshowData()
    this.props.retrieveEpisodesData()
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <Redirect to={`/${this.props.tvshowUrlPath}`}/>
        )}/>
        <Route path={`/${this.props.tvshowUrlPath}`} render={() => (
          <div className="app-content">
            <header className="App-header">
              <TvshowHeader />
            </header>

            <Route path={`/${this.props.tvshowUrlPath}`} component={EpisodesSidebar}/>

            <footer className="app-footer">
              <TvshowFooter />
            </footer>
          </div>
        )}/>




      </div>
    );
  }
}

function mapStateToProps(tvshow) {
  return {
    tvshowUrlPath: tvshow.tvshowInfo.urlPath ? tvshow.tvshowInfo.urlPath.trim() : "",
  }
}

function mapDispatchToProps(dispatch) {
  return {
    retrieveTvshowData: () => dispatch(fetchTvshowData()),
    retrieveEpisodesData: () => dispatch(fetchEpisodesData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
