<script>
import { store } from '../../store';

    export default {
        name: 'PrintFilm',
        props: {
            films: Object,
        }
    }
</script>

<template>
    
    <ul class="row row-cols-3">
        <li v-for="film in films" class="pb-4">
            <div class="crad">
                <div class="card-img-top">
                    <img :src="`https://image.tmdb.org/t/p/w780${film.poster_path}`" alt="">
                </div>
                <div class="crad-body">

                    <h2 class="fw-bold">
                        {{ film.original_title }} 
                    </h2>
                    <h4>
                        {{ film.title}}
                        <img :alt="film.original_language" height="32" :src="`https://cdn.ipregistry.co/flags/emojitwo/${film.original_language}.svg`"/>
                    </h4>
                    <p>{{ film.vote_average.toFixed(2) }}</p>

                </div>
            </div>
            
            
            </li>
    </ul>
</template>



<style lang="scss" scoped>

</style>