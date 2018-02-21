import React from 'react'
import { If, Then, Else } from 'react-if'
import { connect } from 'react-redux'
import { getEpisodeDetails } from '../actions'
import '../style/episodeitem.css'
import '../style/commons.css'

function EpisodeItem(props) {
		const { ID, Duration, EpisodeNumber, Image, Synopsis, Title } = props.episode

		return (
			<section
				onClick={() => props.showEpisodeDetails(ID)}
				className="tvshow-episode-item">
				<If condition={props.selectedEpisodeId === ID}>
					<Then>
						<div className="tvshow-episode-item-row expanded">
							<div className="tvshow-episode-item-name">
								<h3 className="tvshow-episode-item-text">
									{EpisodeNumber}
								</h3>

								<h3 className="tvshow-episode-item-text">
									{Title}
								</h3>
							</div>
							<div className="tvshow-episode-item-detail">
								<h3 className="tvshow-episode-item-duration">
									{`${Duration} min`}
								</h3>
							</div>
							<div className="tvshow-episode-item-image">
								<picture className="tvshow-episode-item-thumbnail">
								  <source srcSet={Image} type="image/webp"/>
								</picture>
							</div>

							<div className="tvshow-episode-item-description">
								<p>{Synopsis}</p>
							</div>
						</div>
					</Then>
					<Else>
						<div className="tvshow-episode-item-row collapsed">
							<div className="tvshow-episode-item-name">
								<h3 className="tvshow-episode-item-text">
									{EpisodeNumber}
								</h3>

								<h3 className="tvshow-episode-item-text">
									{Title}
								</h3>
							</div>

							<div className="tvshow-episode-item-detail">
								<h3 className="tvshow-episode-item-text">
									{`${Duration} min`}
								</h3>
							</div>
						</div>
					</Else>
				</If>
			</section>
		)
}

function mapStateToProps(tvshow) {
	return {
		selectedEpisodeId: tvshow.detailedEpisode
	}
}

function mapDispatchToProps(dispatch) {
	return {
		showEpisodeDetails: (data) => dispatch(getEpisodeDetails(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeItem)
