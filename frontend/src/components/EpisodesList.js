import React from 'react'
import EpisodeItem from './EpisodeItem'
import { connect } from 'react-redux'

function EpisodesList(props) {
	const seasonEpisodes = props.episodes
		.filter(episode => episode.SeasonNumber == props.season)
	return (
		<section className="tvshow-episode-list">
			{seasonEpisodes.map(episode => (
					<EpisodeItem key={episode.ID} episode={episode} />
				))}
		</section>
	)
}

function mapStateToProps(tvshow) {
	let allEpisodes = []
	if (tvshow.episodes) {
		allEpisodes = Object.keys(tvshow.episodes).map(key => tvshow.episodes[key])
	}

	return {
		episodes: allEpisodes,
	}
}

export default connect(mapStateToProps, null)(EpisodesList)
