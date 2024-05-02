import React from 'react';
import FilterRole from './filters/filterRole';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Container,
    Link,
    Grid,
  
  } from '@mui/material';
import FilterMinExp from './filters/filterMinExp';
import FilterMinBasePay from './filters/filterMinBasePay';
import FilterWorkMode from './filters/filterWorkMode';

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
            </Grid>
          
        </>
    );
};

export default Filter;