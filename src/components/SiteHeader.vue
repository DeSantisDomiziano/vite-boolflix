<script>
import {store} from '../store'
export default {
    name: 'SiteHeader',
    data() {
        return {
            store
        }
    }
}

</script>


<template>
    <section>
        <div class="container-fluid py-4">
            <div class="row ">
                <div class="col" id="logo">
                    <img  src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
                </div>
        
                <div class="col-auto ">
                    <input type="text" placeholder="Write a title" class="w-100" v-model="store.SearchText">
                </div>
        
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mt-3" @click="store.getAllResults()">Search</button>
                </div>
            </div>
        </div>
    </section>

    
</template>



<style lang="scss" scoped>

section {
    background-color: #181818;
    img {
        max-width: 100%;
    }
    input {
        background-color: transparent;
        padding: 1rem;
        color: #919191;
        font-size: large;
        border: none;
        border-bottom: 3px solid #999999;
        text-align: end;
    }
    
}

</style>