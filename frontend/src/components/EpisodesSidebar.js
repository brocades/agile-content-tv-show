import { connect } from 'react-redux'
import React, { Component } from 'react'
import EpisodesList from './EpisodesList'
import { selectSeason } from '../actions'
import { If, Then, Else } from 'react-if'

function EpisodesSidebar(props) {
	const seasonEpisodes = props.episodes
		.filter(episode => episode.SeasonNumber == props.selectedSeason)

	return (
		<section className="tvshow-episodes-sidebar">
			<div className="tvshow-episodes-seasons-buttons">
				{props.seasons.map(seasonNumber => (
					<If condition={seasonNumber === props.selectedSeason}>
						<Then>
							<button
								onClick={() => props.changeSeason(seasonNumber)}
								className="tvshow-episodes-season-button selected">
								{`S ${seasonNumber}`}
							</button>
						</Then>

						<Else>
							<button
								onClick={() => props.changeSeason(seasonNumber)}
								className="tvshow-episodes-season-button">
								{`S ${seasonNumber}`}
							</button>
						</Else>
					</If>
					))}
			</div>

			<EpisodesList episodes={seasonEpisodes} />
		</section>
	)
}

function mapStateToProps(tvshow) {
	let allEpisodes = []
	if (tvshow.episodes) {
		allEpisodes = Object.keys(tvshow.episodes).map(key => tvshow.episodes[key])
	}

	return {
		seasons: tvshow.seasons ? tvshow.seasons : [],
		episodes: allEpisodes,
		selectedSeason: tvshow.selectedSeason
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeSeason: (data) => dispatch(selectSeason(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesSidebar)
