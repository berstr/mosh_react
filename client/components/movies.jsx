import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = { 
        // this is not the correct way to initialize state, see next chapters on lifecycle hooks
        movies: getMovies()   
     }

     handleDelete = (movie) => {
         const movies = this.state.movies.filter(m => m._id !== movie._id);
         this.setState({movies: movies});
         // this could also be written as:  this.setState({movies});
         // because key and value have the same name
     }
    render() { 
        return ( 
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title} </td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
         );
    }
}
 
export default Movies;