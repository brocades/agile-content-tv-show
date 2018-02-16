import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchTvshowData, fetchEpisodesData } from './actions'

class App extends Component {

  componentDidMount() {
    this.props.retrieveTvshowData()
    this.props.retrieveEpisodesData()
    console.log(this.props.episodes)
    console.log(this.props.seasons)
    console.log(this.props.tvshowInfo)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            {this.props.seasons.map(season => (
              <p>{season}</p>
              ))}
        </p>
      </div>
    );
  }
}

function mapStateToProps(tvshow) {
  const allEpisodes = Object.keys(tvshow.episodes).map(key => tvshow.episodes[key])

  return {
    episodes: allEpisodes,
    seasons: tvshow.seasons,
    tvshow: tvshow.tvshowInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    retrieveTvshowData: () => dispatch(fetchTvshowData()),
    retrieveEpisodesData: () => dispatch(fetchEpisodesData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
