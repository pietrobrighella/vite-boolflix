<template>
    <div class="row">
        <h1 v-if="store.tvList != ''">Serie TV</h1>
        <template v-for="(tv, index) in store.tvList" :key="tv.id">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-if="tv.poster_path != null">
                <figure>
                    <img class="img-thumbnail" :src="store.params.baseUrl + tv.poster_path" :alt="tv.name">
                </figure>
                <h4>{{tv.name}}</h4>
                <p>{{tv.overview}}</p>
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