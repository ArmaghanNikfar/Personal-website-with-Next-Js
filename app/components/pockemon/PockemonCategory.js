import { Grid, Typography } from '@material-ui/core';
import React from 'react';

const PokemonCategory = ({ category, onClick }) => {
  return (
    <div>
      <button onClick={() => onClick(category.name)}>
        <Grid container justify='center'>
        <Typography color='primary' className='font-bold'>
        {category.name}
          </Typography>
        </Grid>
        </button>
    </div>
  );
};

export default PokemonCategory
