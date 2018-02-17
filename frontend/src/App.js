import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchTvshowData, fetchEpisodesData } from './actions'
import TvshowHeader from './components/TvshowHeader'
import TvshowFooter from './components/TvshowFooter'
import EpisodesSidebar from './components/EpisodesSidebar'

class App extends Component {

  componentDidMount() {
    this.props.retrieveTvshowData()
    this.props.retrieveEpisodesData()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TvshowHeader />
        </header>
        <p className="App-intro">

        </p>
        <EpisodesSidebar />
        <footer className="app-footer">
          <TvshowFooter />
        </footer>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    retrieveTvshowData: () => dispatch(fetchTvshowData()),
    retrieveEpisodesData: () => dispatch(fetchEpisodesData()),
  }
}

export default connect(null, mapDispatchToProps)(App);
