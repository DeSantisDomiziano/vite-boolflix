<script>
    export default {
        name: 'PrintTvshow',
        props: {
            TVshows: Object,
        }
    }
</script>

<template>
    
    <ul>
        <li v-for="TVshow in TVshows" class="pb-4">
            <h2 class="fw-bold">
                {{ TVshow.original_name }} 
                <img
                    :src="`https://flagcdn.com/16x12/${TVshow.original_language}.png`"
                    :srcset="`https://flagcdn.com/32x24/${TVshow.original_language}.png`"      
                    width="16"
                    height="12"
                    :alt="TVshow.original_name">
            </h2>
            <h3>{{ TVshow.name}}</h3>
            <p>{{ TVshow.vote_average.toFixed(2) }}</p>
            <hr>
            </li>
    </ul>
</template>



<style lang="scss" scoped>

</style>