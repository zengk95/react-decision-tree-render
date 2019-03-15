import React, { Component } from 'react';
import Table from "../Table";
import './index.css';
import * as data from '../resources.js';
import Grid from '@material-ui/core/Grid'
import MoviesAppBar from '../AppBar';

class App extends Component {
  render() {
    const movies = data.data;
    console.log(movies);
    return (
      <div>
        <Grid container >
          <MoviesAppBar />
          <Grid item xs={12}>
              <Table data={movies} />
          </Grid>
        </Grid>
      </div >
    );
  }
}

export default App;
