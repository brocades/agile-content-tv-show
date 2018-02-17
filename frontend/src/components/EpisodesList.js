import React from 'react'
import EpisodeItem from './EpisodeItem'

function EpisodesList(props) {
	return (
		<section className="tvshow-episode-list">
			{props.episodes.map(episode => (
					<EpisodeItem key={episode.ID} episode={episode} />
				))}
		</section>
	)
}

export default EpisodesList
