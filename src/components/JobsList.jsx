
import { Grid } from '@mui/material';
import React from 'react';
import JobCard from './jobCard';

const JobList = () => {
    const jobs = [
        { id: 1, title: 'Job 1', description: 'This is job 1' },
        { id: 2, title: 'Job 2', description: 'This is job 2' },
        { id: 3, title: 'Job 3', description: 'This is job 3' },
        { id: 1, title: 'Job 1', description: 'This is job 1' },
        { id: 2, title: 'Job 2', description: 'This is job 2' },
        { id: 3, title: 'Job 3', description: 'This is job 3' },
        { id: 1, title: 'Job 1', description: 'This is job 1' },
        { id: 2, title: 'Job 2', description: 'This is job 2' },
        { id: 3, title: 'Job 3', description: 'This is job 3' },
    ];

    return (
        <div>
            <Grid container spacing={2}>
                {jobs.map((job,index) => (
                    <Grid item>
                   <JobCard key={index}/>
                   </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default JobList;