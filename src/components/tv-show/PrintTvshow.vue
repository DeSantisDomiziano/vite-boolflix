<script>
    export default {
        name: 'PrintTvshow',
        props: {
            TVshows: Object,
        }
    }
</script>





<template>
    
    <ul class="row row-cols-3">
        <li v-for="TVshow in TVshows" class="pb-4">
            <div class="crad">
                <div class="card-img-top">
                    <img :src="`https://image.tmdb.org/t/p/w780${TVshow.poster_path}`" alt="">
                </div>
                <div class="crad-body">
                    <h2 class="fw-bold">
                        {{ TVshow.original_name }} 
                    </h2>
                    <h4>
                        {{ TVshow.name}}
                        <img :alt="TVshow.original_language" height="32" :src="`https://cdn.ipregistry.co/flags/emojitwo/${TVshow.original_language}.svg`"/>
                    </h4>
                    <p>{{ TVshow.vote_average.toFixed(2) }}</p>
                </div>
            </div>
        </li>
    </ul>
</template>



<style lang="scss" scoped>

</style>