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
    
    <section v-for="(items, title) in store.allResults" class="py-5">
        <div class="container">
            <h2>{{ title }}</h2>

            <div v-if="items" class="row row-cols-4">
                <div v-for="item in items.results">
                    <div class="card">
                        <img :src="`https://image.tmdb.org/t/p/w780${item.poster_path}`" alt="">
                    </div>
                    <div v-if="title === 'movies'">
                        {{ item.title }}
                        {{ item.original_title }}
                    </div>
                    <div v-else>
                        {{ item.name }}
                        {{ item.original_name }}
                    </div>
                    <span>{{ item.vote_average }}</span>
                    <div>
                        <img :alt="item.original_language" width="32" :src="`https://cdn.ipregistry.co/flags/emojitwo/${item.original_language}.svg`"/>
                    </div> 
                </div>
            </div>
        </div>
        
    </section>

</template>



<style lang="scss" scoped>
section {
    background-color: #414141;
    color: #fff;
    h2 {
        color: #000;
    }
}
</style>