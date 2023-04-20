<script>
import {store} from '../../store'
import PrintFilm from './PrintFilm.vue'
export default {
    name: 'InputFilm',
    components: {
        PrintFilm,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        searchFilm() {
            let newUrl;
            if (store.filmTitle === '') {
                newUrl = store.SearchMovie_UrlAPI
            }else {
                newUrl = store.SearchMovie_UrlAPI + `&query=${store.filmTitle}`
            }
            store.SearchMovie(newUrl)
        }
    },
}

</script>


<template>

<div class="row mb-5">

    <div class="col-auto w-50">
        <input type="text" placeholder="Write a title" class="w-100" v-model="store.filmTitle">
    </div>

    <div class="col-auto">
        <button type="submit" class="btn btn-primary" @click="searchFilm()">Search</button>
    </div>

</div>

<PrintFilm
:films="store.filmArray"/>
    
</template>



<style lang="scss" scoped>

</style>