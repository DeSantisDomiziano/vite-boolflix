<script>
    export default {
        name: 'PrintFilm',
        props: {
            films: Object,
        }
    }
</script>

<template>
    
    <ul>
        <li v-for="film in films" class="pb-4">
            <h2 class="fw-bold">
                {{ film.original_title }} 
                <img :src='`https://flagsapi.com/${film.original_language.toUpperCase()}/shiny/32.png`' alt="">
            </h2>
            <h3>{{ film.title}}</h3>
            <p>{{ film.vote_average.toFixed(2) }}</p>
            <hr>
            </li>
    </ul>
</template>



<style lang="scss" scoped>

</style>