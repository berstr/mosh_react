import React, { Component } from 'react';
import Movies from './components/movies.jsx';
//import { getMovies } from './services/fakeMovieService';


class App extends Component {
    render() { 
        //const movies = getMovies();
        //console.log(movies);
        return ( 
            <main className="container">
                <Movies />
            </main>
         );
    }
}
 
export default App ;