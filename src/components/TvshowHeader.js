import { connect } from 'react-redux'
import React from 'react'
import '../style/tvshowheader.css';

function TvshowHeader(props) {
	return (
		<section className="tvshow-header">
			<div className="tvshow-header-title-container">
				<h1 className="tvshow-header-title">
					{props.title}
				</h1>
			</div>
			<div className="tvshow-header-subtitle-container">
				{props.genres.map((genre, key) => (
						<h3 key={key} className="tvshow-header-subtitle-info">
							{` ${genre} / `}
						</h3>
					))}
				<h3 className="tvshow-header-subtitle-info">
					{` ${props.year}`}
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
