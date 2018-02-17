import {
	RETRIEVE_TVSHOW_DATA,
	RETRIEVE_EPISODES_DATA,
	GET_EPISODE_DETAILS,
	CHANGE_FOOTER_INFO,
	CHANGE_SEASON,
} from '../actions'

const initialAppState = {
	episodes: {},
	tvshowInfo: {},
	seasons: [],
	selectedSeason: 1,
	detailedEpisode: "",
	footerOption: "general",
}

function tvshow (state = initialAppState, action) {
	switch (action.type) {
		case RETRIEVE_TVSHOW_DATA:
			const { tvshowData } = action
			const tvshowInfo = {
				cast: tvshowData.Cast.map(actor => actor.Name),
				genres: tvshowData.Genres.map(genre => genre.Title),
				id: tvshowData.ID,
				image: tvshowData.Images,
				synopsis: tvshowData.Synopsis,
				title: tvshowData.Title,
				year: tvshowData.Year,
			}
			return {
				...state,
				tvshowInfo,
			}
		case RETRIEVE_EPISODES_DATA:
			const { episodesData } = action
			let episodes = {}
			let seasons = new Set()
			for (let episode of Object.values(episodesData)) {
				if (episode) {
					episodes = {
						...episodes,
						[episode.ID]: episode,
					}
					seasons.add(episode.SeasonNumber)
				}
			}
			return {
				...state,
				episodes,
				seasons: [...seasons],
			}
		case GET_EPISODE_DETAILS:
			const { episodeId } = action
			return {
				...state,
				detailedEpisode: episodeId,
			}
		case CHANGE_FOOTER_INFO:
			const { footerOption } = action
			return {
				...state,
				footerOption: footerOption,
			}
		case CHANGE_SEASON:
			return {
				...state,
				selectedSeason: action.seasonNumber,
			}
		default:
			return state
	}
}

export default tvshow