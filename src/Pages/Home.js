import React, { Component } from 'react';
import { Title } from '../Components/Title'
import { SearchForm }from '../Components/SearchForm'
import { MoviesList } from '../Components/MoviesList'

export class Home extends Component {

    state = { usedSearch: false, results: [] }

    _handleResults = (results) => {
    this.setState({ results, usedSearch: true })
    }

    _renderResults(){
    return this.state.results.length === 0
    ? <p>Sorry! Results not found</p>
    : <MoviesList movies={this.state.results}/>
    }

    render() {
        return (
            <div>
            <Title>Search Movies</Title>
            <div className='SearchForm-wrapper'>
                <SearchForm onResults={this._handleResults}/>
            </div>
            {
                this.state.usedSearch
                ? this._renderResults()
                : <small> Use the form to search a movie </small>
            }
            </div>
        );
    }
}
