<template>
    <div class="container d-flex flex-wrap">
        <div v-for="(firstLevel, index) in store.movieList" :key="firstLevel.id">
            <template v-if="firstLevel.known_for != undefined">
                <template v-for="(secondLevel, index) in firstLevel.known_for" :key="secondLevel.id">
                    <div class="border" v-if="secondLevel.media_type != 'movie'">
                        <figure>
                            <img :src="store.params.baseUrl + secondLevel.backdrop_path" :alt="secondLevel.title">
                        </figure>
                        <h4>{{secondLevel.title}}</h4>
                        <p>{{secondLevel.vote_average}} - {{secondLevel.media_type}}</p>
                        <h6>{{firstLevel.name}}</h6>
                    </div>
                </template>
            </template>

            <template v-else>
                <div class="border" v-if="firstLevel.media_type != 'movie'">
                    <figure>
                        <img :src="store.params.baseUrl + firstLevel.backdrop_path" :alt="firstLevel.name">
                    </figure>
                    <h4>{{firstLevel.name}}</h4>
                    <p>{{firstLevel.vote_average}} - {{firstLevel.media_type}}</p>
                </div>
            </template>
        </div>
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