<template>
  <div>

  </div>
</template>

<script>
import { store } from './store';
  export default {
    data() {
      return {
        store,
      }
    },
    mounted() {
      console.log(store.getMovie())
    },
  }
</script>

<style lang="scss" scoped>

</style>