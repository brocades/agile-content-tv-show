import React from 'react'
import '../style/castinfo.css'

function CastInfo(props) {
	return (
		<section className="tvshow-footer-cast-info">
			<div className="tvshow-cast-info-container">
				<div className="tvshow-cast-info">
					{props.cast.map((actor, key) => (
						<div className="tvshow-cast-actor-box">
							<div key={key} className="tvshow-cast-actor">
								<h3 className="tvshow-cast-actor-name">
									{actor}
								</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default CastInfo
