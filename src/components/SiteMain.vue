<script>
import {store} from '../store'
import axios from 'axios'
export default {
    name: 'SiteMain',
    data() {
        return {
            store
        }
    },
    methods: {
            getImageUrl(name) {
                return new URL(`../assets/img/${name}.png`, import.meta.url).href
            }, 

            startMovie() {
                const movieUrl = `${store.SearchMovie_UrlAPI}&query=star`
                return axios.get(movieUrl)
            },

            startTvshow() {
                const tvshoweUrl = `${store.SearchTv_UrlAPI}&query=game`
                return axios.get(tvshoweUrl)
            },

            startAllResults() {
                Promise
                .all([this.startMovie(), this.startTvshow()])
                .then(([movies, tvshows]) => {
                    store.allResults.movies = movies.data
                    store.allResults.tvshows = tvshows.data
                })
            }
    },
    mounted () {
        this.startAllResults()
    } 
}
</script>





<template>
    
    <section v-for="(items, title) in store.allResults" class="pb-5">
        <div class="container-fluid px-1 mx-5">
            <h2 class="text-uppercase text-center">{{ title }}</h2>

            <div v-if="items" class="row g-5">
                
                    <div class="cards col-4 py-5" v-for="item in items.results">

                        <div class="front" v-if="item.poster_path !== null">
                            <img :src="`https://image.tmdb.org/t/p/w780${item.poster_path}`" alt="">
                        </div>
                        <div class="front img_none" v-else>
                            <h3>
                                POSTER <br> 
                                IMAGE <br>
                                BROKE <br>
                            </h3>
                        </div>

                        <div class="back">

                            <div v-if="title === 'movies'">
                                <h3>
                                    titolo: {{ item.title }}
                                </h3>
                                <h5>
                                    titolo originale: {{ item.original_title }}
                                </h5>
                                 <hr>
                            </div>
                            <div v-else>
                                <h3>
                                    {{ item.name }}
                                </h3>
                                <h5>
                                    {{ item.original_name }}
                                </h5>
                                <hr>
                            </div>
                            
                            <p>{{ item.overview }}</p>
                            <hr>

                            <span>
                                voti: {{ item.vote_count }} <br>
                            </span>

                            <div class="float-start me-2">
                                Media: 
                            </div>

                            <div class="stars-outer float-start me-2">
                                <font-awesome-icon icon="fa-solid fa-star"
                                 style="color: #8f8f8f;" 
                                 v-for="uno in 5"/>
                                
                                <div class="stars-inner" 
                                :style="`width: ${(item.vote_average.toFixed(2) * 10).toFixed(0)}%;`">
                                    <font-awesome-icon icon="fa-solid fa-star"
                                    style="color: #ffd700;"
                                    v-for="uno in 5"/>
                                </div>
                            </div>

                            <div>
                               {{ (item.vote_average / 2).toFixed(1) }} 
                                
                            </div>


                            <div class="my-1">
                                <p class="float-start me-3">
                                    <strong>
                                        Lingua: 
                                        
                                    </strong>
                                </p>
                                <img :src="getImageUrl(item.original_language)" width="24">
                                
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

    .container-fluid {
        width: 92vw !important;
    }

    h2 {
        color: #eaeaea;
        font-size: 4.5rem;
        font-weight: bold;

    }

    hr {
        border: 1px solid #fff;
        filter: blur(2px);
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

        .img_none {
            background-color: #1d1d1d;
            border: 5px solid #dc1a28;
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

            h3 {
                position: absolute;
                top: 0%;
                left: 50%;
                transform: translate(-50%);
                font-size: 3.5rem;
                font-weight: bolder;
                line-height: 2;
                text-align: center;
                color: #d9d7d7;

            }
        }

        &:hover .front {
            transform: rotateY(-180deg);
        }
        .back {
            border: 5px solid #dc1a28;
            padding: 0.25rem;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #1d1d1d;
            backface-visibility: hidden;
            transform: rotateY(180deg);
            transition: 0.5s;
            overflow-y: auto;

            p {
                margin-top: 0.75rem;
            }

            img {
                object-fit: contain;
            }
        }

        &:hover .back {
            transform: rotateY(0deg);
        }
    }

    .stars-outer {
        position: relative;
        display: inline-block;
        width: 90px;
    }

    .stars-inner {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        white-space: nowrap;
        padding-right: 1.25rem;
        overflow: hidden;
    }

}
</style>