<template>
  <div>
    <div class="py-3">
      <div class="position-relative keyDelete keyEnter">
        <input @keyup.ctrl.delete="listDel" @keyup.enter="store.getMovie(), store.getTv(), store.getActor()" type="text" class="form-control form-control-lg myInput" id="filter" placeholder="Cerca un film, una serie tv o un attore ..." v-model="setValore">
        <button @click="store.getMovie(), store.getTv(), store.getActor()" class="btn btn-primary myButton position-absolute">Cerca</button>
      </div>
    </div>
  </div>
  <div>
    <ListMovieComponent />
    <ListTvComponent />
    <ListActorComponent />
  </div>
</template>

<script>
import ListActorComponent from './components/ListActorComponent.vue';
import ListMovieComponent from './components/ListMovieComponent.vue';
import ListTvComponent from './components/ListTvComponent.vue';
import { store } from './store';
  export default {
    data() {
        return {
            store,
        };
    },
    computed: {
      setValore: {
        get (){
          return store.params.valore;
        },
        set (newValue){
            store.params.valore = newValue;
        }
      }
    },
    watch: {
      setValore(newValue,oldValue) {
        if (newValue == '') {
          this.listDel()
        } else {
          return newValue
        }
      }
    },
    // computed: {
    //   setValore: {
    //     get (){
    //       return store.params.valore;
    //     },
    //     set (newValue){
    //       store.params.valore = newValue.replace(/ /g, ' ');
    //     }
    //   }
    // },
    methods: {
      listDel(){
        store.movieList = '';
        store.tvList = '';
        store.actorList = '';
        this.setValore = '';
      }
    },
    mounted() {
        // console.log(store.getMovie());
        // console.log("setValore: ", this.setValore, "newValue: ", this.newValue);
    },
    components: { ListMovieComponent, ListTvComponent, ListActorComponent }
}
</script>

<style lang="scss" scoped>
.myButton {
  right: 5px;
  top: 5px;
  width: 250px;
  height: 50px;
  border-radius: 40px;
}

.myInput {
  border-radius: 40px;
  height: 60px;
  box-shadow: 0px 0px 15px rgba(0,0,0,.20);
}

.keyDelete::after {
  content: 'CTRL+DEL for reset';
  position: absolute;
  font-size: .8rem;
  top: 18px;
  border: 1px solid rgb(210, 210, 210);
  text-align: center;
  right: 270px;
  color: rgb(210, 210, 210);
  width: 140px;
  height: 25px;
  line-height: 23px;
  border-radius: 6px;
  z-index: 999;
}

.keyEnter::before {
  content: 'Press ENTER for search';
  position: absolute;
  font-size: .8rem;
  top: 18px;
  border: 1px solid rgb(210, 210, 210);
  text-align: center;
  right: 415px;
  color: rgb(210, 210, 210);
  width: 160px;
  height: 25px;
  line-height: 23px;
  border-radius: 6px;
  z-index: 999;
}

.myInput::placeholder {
  color: rgb(199, 199, 199);
  font-weight: 300;
  padding-left: 10px;
}
</style>