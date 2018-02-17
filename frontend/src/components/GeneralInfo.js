import React from 'react'

function GeneralInfo(props) {
	return (
		<section className="tvshow-footer-general-info">
			<div className="tvshow-general-info-container">
				<h3 className="tvshow-general-info">
					Synopsis
				</h3>

				<div className="tvshow-general-info-synopsis">
					<p>{props.synopsis}</p>
				</div>
			</div>
		</section>
	)
}

export default GeneralInfo
