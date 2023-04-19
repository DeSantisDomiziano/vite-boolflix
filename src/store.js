import axios from 'axios'
import {reactive} from 'vue'
export const store = reactive ({
    loading: false,
    SearchMovie_UrlAPI: 'https://api.themoviedb.org/3/search/movie?api_key=c34a799aa239eb17511449d597c9964b',
    SearchMovie(url) {
        axios
        .get(url)
        .then(resp => {
            console.log(resp.data);
        })
    }
})