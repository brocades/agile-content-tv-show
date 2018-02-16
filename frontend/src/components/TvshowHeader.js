import { connect } from 'react-redux'
import React from 'react'

function TvshowHeader(props) {
	return (
		<section className="tvshow-header">
			<div className="tvshow-title-container">
				<h1 className="tvshow-title">
					{props.title}
				</h1>
			</div>
			<div className="tvshow-subtitle-container">
				{props.genres.map(genre => (
						<h3 className="tvshow-subtitle-info">
							{`${genre} / `}
						</h3>
					))}
				<h3 className="tvshow-subtitle-info">
					{`/ ${props.year}`}
				</h3>
			</div>
		</section>
	)
}

function mapStateToProps(tvshow) {
	return {
		title: tvshow.tvshowInfo.title ? tvshow.tvshowInfo.title : "",
		year: tvshow.tvshowInfo.year ? tvshow.tvshowInfo.year : "",
		genres: tvshow.tvshowInfo.genres ? tvshow.tvshowInfo.genres : [],
	}
}

export default connect(mapStateToProps, null)(TvshowHeader)
