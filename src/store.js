import axios from 'axios'
import {reactive} from 'vue'
export const store = reactive ({
    loading: false,
    filmTitle: '',
    filmArray: null,
    tvShowName: '',
    tvShowArray: null,
    SearchMovie_UrlAPI: 'https://api.themoviedb.org/3/search/movie?api_key=c34a799aa239eb17511449d597c9964b',
    SearchTv_UrlAPI: 'https://api.themoviedb.org/3/search/tv?api_key=c34a799aa239eb17511449d597c9964b',
    SearchMovie(url) {
        axios
        .get(url)
        .then(resp => {
            store.filmArray = resp.data.results
        })
    },
    SearchTvshow(url) {
        axios
        .get(url)
        .then(resp => {
            store.tvShowArray = resp.data.results
        })
    }
})