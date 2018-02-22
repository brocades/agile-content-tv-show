const api = "https://sample-api-78c77.firebaseio.com"

const urlPaths = {
	'tvshow': 'tv-shows/SHOW123.json',
	'episodes': 'episodes/SHOW123.json',
}

const headers = {
	'Accept': 'application/json',
}

export const retrieveTvshowData = () =>
	fetch(`${api}/${urlPaths.tvshow}`, { headers })
		.then(res => res.json())
		.then(data => data)

export const retrieveEpisodesData = () =>
	fetch(`${api}/${urlPaths.episodes}`, { headers })
		.then(res => res.json())
		.then(data => data)