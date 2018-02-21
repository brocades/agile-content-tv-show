import React, { Component } from 'react';
import logo from './logo.svg';
import './style/app.css';
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
      <div className="app">
        <Route exact path="/" render={() => (
          <Redirect to={`/${this.props.tvshowUrlPath}`}/>
        )}/>
        <Route path={`/${this.props.tvshowUrlPath}`} render={() => (
          <div className="app-content">
            <div
              className="tvshow-content"
              style={{"backgroundImage": `url(${this.props.backgroundImage})`}}>

              <div className="opaque-layer" >
                <header className="app-header">
                  <TvshowHeader />
                </header>

                <div className="tvshow-content-area">
                </div>
                <Route path={`/${this.props.tvshowUrlPath}`} component={EpisodesSidebar}/>
              </div>
            </div>

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
    backgroundImage: tvshow.tvshowInfo.image ? tvshow.tvshowInfo.image : "",
    selectedSeason: tvshow.selectedSeason ? tvshow.selectedSeason : 1,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    retrieveTvshowData: () => dispatch(fetchTvshowData()),
    retrieveEpisodesData: () => dispatch(fetchEpisodesData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
