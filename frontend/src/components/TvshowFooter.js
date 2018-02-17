import { connect } from 'react-redux'
import React from 'react'
import { If, Then, Else } from 'react-if'
import { selectFooterOption } from '../actions'
import GeneralInfo from './GeneralInfo'
import CastInfo from './CastInfo'

function TvshowFooter(props) {
	return (
		<section className="tvshow-footer">
			<div className="tvshow-footer-buttons-container">
				<button
					onClick={() => props.selectFooterOption("general")}
					className="tvshow-footer-button selected">
				GENERAL
				</button>

				<button
					onClick={() => props.selectFooterOption("cast")}
					className="tvshow-footer-button">
				CAST
				</button>
			</div>

			<If condition={props.footerOption === "general"}>
				<Then>
					<GeneralInfo synopsis={props.synopsis} />
				</Then>

				<Else>
					<CastInfo cast={props.cast} />
				</Else>
			</If>
		</section>
	)
}

function mapStateToProps(tvshow) {
	return {
		cast: tvshow.tvshowInfo.cast ? tvshow.tvshowInfo.cast : [],
		synopsis: tvshow.tvshowInfo.synopsis ? tvshow.tvshowInfo.synopsis : "",
		footerOption: tvshow.footerOption,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		selectFooterOption: (data) => dispatch(selectFooterOption(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TvshowFooter)
