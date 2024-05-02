import React from 'react';
import FilterRole from './filters/filterRole';
import {
    Grid,
  } from '@mui/material';
import FilterMinExp from './filters/filterMinExp';
import FilterMinBasePay from './filters/filterMinBasePay';
import FilterWorkMode from './filters/filterWorkMode';
import FilterCompanyName from './filters/filterCompanyName';

const Filter = () => {
    // Add your filter logic here

    return (
        <> 
        
            <Grid container spacing={2} sx={{p:4,mx:'auto'}}>
             <Grid item>
            <FilterRole/>
            </Grid>
            <Grid item>
            <FilterMinExp/>
            </Grid>
            <Grid item>
            <FilterMinBasePay/>
            </Grid>
            <Grid item>
            <FilterWorkMode/>
            </Grid>
            <Grid item>
            <FilterCompanyName/>
            </Grid>
            </Grid>
          
        </>
    );
};

export default Filter;