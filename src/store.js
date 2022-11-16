import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/',
    apiKey: 'c1100882854ee26f18048d72655caf8e',
    endPoint: 'search/movie',
    params: {
        movie: '&query=ritorno%20al%20futuro',
        search: '',
    },
    getMovie() {
        const apiUrl = this.apiURL + this.endPoint + '?api_key=' + this.apiKey + this.params.movie;
        axios.get(apiUrl)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
    }
});