import { connect } from 'react-redux'
import React from 'react'
import { If, Then, Else } from 'react-if'
import { selectFooterOption } from '../actions'
import GeneralInfo from './GeneralInfo'
import CastInfo from './CastInfo'
import '../style/commons.css'

function TvshowFooter(props) {
	return (
		<section className="tvshow-footer">
			<If condition={props.footerOption === "resumo"}>
				<Then>
					<div className="buttons-container">
						<button
							onClick={() => props.selectFooterOption("resumo")}
							className="button selected">
						RESUMO
						</button>

						<button
							onClick={() => props.selectFooterOption("elenco")}
							className="button">
						ELENCO
						</button>
					</div>
				</Then>

				<Else>
					<div className="buttons-container">
						<button
							onClick={() => props.selectFooterOption("resumo")}
							className="button">
						RESUMO
						</button>

						<button
							onClick={() => props.selectFooterOption("elenco")}
							className="button selected">
						ELENCO
						</button>
					</div>
				</Else>
			</If>


			<If condition={props.footerOption === "resumo"}>
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
		footerOption: tvshow.footerOption ? tvshow.footerOption : "resumo",
	}
}

function mapDispatchToProps(dispatch) {
	return {
		selectFooterOption: (data) => dispatch(selectFooterOption(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TvshowFooter)
