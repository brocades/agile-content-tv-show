import * as TvshowAPI from '../TvshowAPI'

export const RETRIEVE_TVSHOW_DATA = 'RETRIEVE_TVSHOW_DATA'
export const RETRIEVE_EPISODES_DATA = 'RETRIEVE_EPISODES_DATA'
export const GET_EPISODE_DETAILS = 'GET_EPISODE_DETAILS'
export const CHANGE_FOOTER_INFO = 'CHANGE_FOOTER_INFO'
export const CHANGE_SEASON = 'CHANGE_SEASON'

export function getTvshowData(tvshowData) {
	return {
		type: RETRIEVE_TVSHOW_DATA,
		tvshowData,
	}
}

export function getEpisodesData(episodesData) {
	return {
		type: RETRIEVE_EPISODES_DATA,
		episodesData,
	}
}

export function getEpisodeDetails(episodeId) {
	return {
		type: GET_EPISODE_DETAILS,
		episodeId,
	}
}

export function selectFooterOption(footerOption) {
	return {
		type: CHANGE_FOOTER_INFO,
		footerOption,
	}
}

export function selectSeason(seasonNumber) {
	return {
		type: CHANGE_SEASON,
		seasonNumber,
	}
}

export const fetchTvshowData = () => dispatch => (
		TvshowAPI
			.retrieveTvshowData()
			.then(tvshowData => dispatch(getTvshowData(tvshowData)))
	)

export const fetchEpisodesData = () => dispatch => (
		TvshowAPI
			.retrieveEpisodesData()
			.then(episodesData => dispatch(getEpisodesData(episodesData)))
	)

