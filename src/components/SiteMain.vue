<script>
import {store} from '../store'
export default {
    name: 'SiteMain',
    data() {
        return {
            store
        }
    }
}
</script>





<template>
    
    <section v-for="(items, title) in store.allResults" class="pb-5">
        <div class="container-fluid px-5 mx-5">
            <h2 class="text-uppercase text-center">{{ title }}</h2>

            <div v-if="items" class="row g-5">
                
                    <div class="cards col-4 py-5" v-for="item in items.results">

                        <div class="front">
                            <img :src="`https://image.tmdb.org/t/p/w780${item.poster_path}`" alt="">
                        </div>

                        <div class="back">

                            <div v-if="title === 'movies'">
                                <h3>
                                    titolo: {{ item.title }}
                                </h3>
                                <h5>
                                    titolo originale:{{ item.original_title }}
                                </h5>
                                
                            </div>
                            <div v-else>
                                <h3>
                                    {{ item.name }}
                                </h3>
                                <h5>
                                    {{ item.original_name }}
                                </h5>
                            </div>

                            <span>voto: {{ item.vote_average }}</span>
                            <div class="my-1">
                                <span>
                                    <strong>Lingua:    <img :alt="item.original_language" width="32" :src="`https://cdn.ipregistry.co/flags/emojitwo/${item.original_language}.svg`"/></strong>
                                </span>
                                
                            </div> 
                        </div>
                    </div>
                    
            
            </div>
        </div>
        
    </section>

</template>



<style lang="scss" scoped>
section {
    background-color: #414141;
    color: #ffffff;
    min-height: 45vh;

    h2 {
        color: #eaeaea;
        font-size: 4.5rem;
        font-weight: bold;
    }

    .cards {
        position: relative;
        max-width: 300px;
        min-height: 500px;
        left: 0;
        top: 0;
        transform-style: preserve-3d;
        perspective: 600px;
        transition: 0.5s;
        margin-right: 0.75rem;
        margin-bottom: 0.75rem;

        img {
            max-height: 100%;
            object-fit: cover
        }


        .front {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            transform: rotateY(0deg);
            transition: 0.5s;
        }

        &:hover .front {
            transform: rotateY(-180deg);
        }
        .back {
            border: 5px solid #dc1a28;
            padding: 2.5rem 1rem;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #1d1d1d;
            backface-visibility: hidden;
            transform: rotateY(180deg);
            transition: 0.5s;
        }

        &:hover .back {
            transform: rotateY(0deg);
        }
    }

}
</style>