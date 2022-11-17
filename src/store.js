import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/',
    apiKey: 'c1100882854ee26f18048d72655caf8e',
    movieList: [],
    tvList: [],
    actorList: [],
    params: {
        endPointMovie: 'search/movie',
        endPointTv: 'search/tv',
        endPointActor: 'search/person',
        query: '&query=',
        valore: '',
        baseUrl: 'https://image.tmdb.org/t/p/w500',
    },
    
    getMovie() {
        const apiUrl = this.apiURL + this.params.endPointMovie + '?api_key=' + this.apiKey + this.params.query + this.params.valore.replace(/ /g, '%20');
        axios.get(apiUrl)
        .then(res => {
            this.movieList = res.data.results;
            console.log('DATI: ',this.movieList)
        })
        .catch(err => {
            console.error('Errore: ',err); 
        })
    },
    getTv() {
        const apiUrl = this.apiURL + this.params.endPointTv + '?api_key=' + this.apiKey + this.params.query + this.params.valore.replace(/ /g, '%20');
        axios.get(apiUrl)
        .then(res => {
            this.tvList = res.data.results;
            console.log('DATI: ',this.tvList)
        })
        .catch(err => {
            console.error('Errore: ',err); 
        })
    },
    getActor() {
        const apiUrl = this.apiURL + this.params.endPointActor + '?api_key=' + this.apiKey + this.params.query + this.params.valore.replace(/ /g, '%20');
        axios.get(apiUrl)
        .then(res => {
            this.actorList = res.data.results;
            console.log('DATI: ',this.actorList)
        })
        .catch(err => {
            console.error('Errore: ',err); 
        })
    }
});