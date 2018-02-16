import {
	RETRIEVE_TVSHOW_DATA,
	RETRIEVE_EPISODES_DATA,
} from '../actions'

const initialAppState = {
	episodes: {},
	tvshowInfo: {},
	seasons: [],
}

function tvshow (state = initialAppState, action) {
	switch (action.type) {
		case RETRIEVE_TVSHOW_DATA:
			const { tvshowData } = action
			const tvshowInfo = {
				cast: tvshowData.Cast,
				genres: tvshowData.Genres.map(genre => genre.Title),
				id: tvshowData.ID,
				images: tvshowData.Images,
				synopsis: tvshowData.Synopsis,
				title: tvshowData.Title,
				year: tvshowData.Year,
			}
			console.log(tvshowInfo.genres[0])
			return {
				...state,
				tvshowInfo
			}
		case RETRIEVE_EPISODES_DATA:
			const { episodesData } = action
			let episodes = {}
			let seasons = new Set()
			for (let episode of Object.values(episodesData)) {
				if (episode) {
					episodes = {
						...episodes,
							[episode.id]: episode
					}
					seasons.add(episode.SeasonNumber)
				}
			}
			return {
				...state,
				episodes,
				seasons: [...seasons],
			}
		default:
			return state
	}
}

export default tvshow