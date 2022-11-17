<template>
    <div class="row">
        <h1 v-if="store.actorList != ''">Attori</h1>
        <template v-for="(actor, index) in store.actorList" :key="actor.id">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-if="actor.profile_path != null">
                <figure>
                    <img class="img-fluid" :src="store.params.baseUrl + actor.profile_path" :alt="actor.name">
                    <figcaption>{{actor.name}}</figcaption>
                </figure>
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