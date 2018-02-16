import * as TvshowAPI from '../TvshowAPI'

export const RETRIEVE_TVSHOW_DATA = 'RETRIEVE_TVSHOW_DATA'
export const RETRIEVE_EPISODES_DATA = 'RETRIEVE_EPISODES_DATA'

export function getTvshowData(tvshowData) {
	return {
		type: RETRIEVE_TVSHOW_DATA,
		tvshowData,
	}
}

export function getEpisodesData(episodesData) {
	return {
		type: RETRIEVE_EPISODES_DATA,
		episodesData
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

