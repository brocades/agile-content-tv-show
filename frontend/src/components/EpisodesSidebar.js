import { connect } from 'react-redux'
import React, { Component } from 'react'
import EpisodesList from './EpisodesList'
import { selectSeason } from '../actions'
import { If, Then, Else } from 'react-if'
import { Route, Link } from 'react-router-dom'
import '../style/episodessidebar.css'

class EpisodesSidebar extends Component {

	render() {

		return (
			<section className="tvshow-episodes-sidebar">
				<div className="tvshow-episodes-seasons-buttons">
					{this.props.seasons.map(seasonNumber => (
						<If condition={seasonNumber === this.props.selectedSeason}>
							<Then>
								<Link to={`/${this.props.tvshowUrlPath}/season/${seasonNumber}`}>
									<button id={seasonNumber}
										onClick={() => this.props.changeSeason(seasonNumber)}
										className="tvshow-episodes-seasons-button selected">
										{`S ${seasonNumber}`}
									</button>
								</Link>
							</Then>

							<Else>
								<Link to={`/${this.props.tvshowUrlPath}/season/${seasonNumber}`}>
									<button id={seasonNumber}
										onClick={() => this.props.changeSeason(seasonNumber)}
										className="tvshow-episodes-seasons-button">
										{`S ${seasonNumber}`}
									</button>
								</Link>
							</Else>
						</If>
						))}
						<button className="tvshow-episodes-seasons-button-fill">
							season
						</button>
				</div>


				<Route path="/:tvshowname/season/:seasonNumber" render={({ match }) => (
					<EpisodesList season={match.params.seasonNumber} />
					)}/>

			</section>
		)
	}
}

function mapStateToProps(tvshow) {
	let allEpisodes = []
	if (tvshow.episodes) {
		allEpisodes = Object.keys(tvshow.episodes).map(key => tvshow.episodes[key])
	}

	return {
		seasons: tvshow.seasons ? tvshow.seasons : [],
		episodes: allEpisodes,
		selectedSeason: tvshow.selectedSeason,
		tvshowUrlPath: tvshow.tvshowInfo.urlPath ? tvshow.tvshowInfo.urlPath : "",
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeSeason: (data) => dispatch(selectSeason(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesSidebar)
