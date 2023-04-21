import axios from 'axios'
import {reactive} from 'vue'
export const store = reactive ({
    loading: false,
    SearchText: '',
    allResults: {
        movies: null,
        tvshows: null
    },
    SearchMovie_UrlAPI: 'https://api.themoviedb.org/3/search/movie?api_key=c34a799aa239eb17511449d597c9964b',
    SearchTv_UrlAPI: 'https://api.themoviedb.org/3/search/tv?api_key=c34a799aa239eb17511449d597c9964b',
    
    getMovie() {
        const movieUrl = `${this.SearchMovie_UrlAPI}&query=${this.SearchText}`
        return axios.get(movieUrl)
    },
    getTvshow() {
        const tvshoweUrl = `${this.SearchTv_UrlAPI}&query=${this.SearchText}`
        return axios.get(tvshoweUrl)
    },

    getAllResults() {
        Promise
        .all([this.getMovie(), this.getTvshow()])
        .then(([movies, tvshows]) => {
            this.allResults.movies = movies.data
            this.allResults.tvshows = tvshows.data
        })
    }
})