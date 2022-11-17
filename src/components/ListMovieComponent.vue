<template>
    <div class="row">
        <h1 v-if="store.movieList != ''">Film</h1>
        <template v-for="(movie, index) in store.movieList" :key="movie.id">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-if="movie.poster_path != null">
                <figure>
                    <img class="img-fluid" :src="store.params.baseUrl + movie.poster_path" :alt="movie.title">
                </figure>
                <h4>{{movie.title}}</h4>
                <p>{{movie.overview}}</p>
            </div>
        </template>
    </div>
</template>

<script>
import { store } from '../store';
    export default {
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>