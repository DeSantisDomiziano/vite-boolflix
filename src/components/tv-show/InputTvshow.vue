<script>
import {store} from '../../store'
import PrintTvshow from './PrintTvshow.vue'
export default {
    name: 'InputTvshow',
    components: {
        PrintTvshow,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        searchTv() {
            let newUrl;
            if (store.tvShowName === '') {
                newUrl = store.SearchTv_UrlAPI
            }else {
                newUrl = store.SearchTv_UrlAPI + `&query=${store.tvShowName}`
            }
            store.SearchTvshow(newUrl)
        }
    },
}

</script>


<template>

<div class="row mb-5">

    <div class="col-auto w-50">
        <input type="text" placeholder="Write a title" class="w-100" v-model="store.tvShowName">
    </div>

    <div class="col-auto">
        <button type="submit" class="btn btn-primary" @click="searchTv()">Search</button>
    </div>

</div>

<PrintTvshow
:TVshows="store.tvShowArray"/>
    
</template>



<style lang="scss" scoped>

</style>