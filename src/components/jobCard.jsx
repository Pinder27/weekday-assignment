import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Container,
  CardHeader,
  
} from '@mui/material';


const JobCard = () => {
    const job = {
        title: 'Software Engineer',
        company: 'Google',
        location: 'Mountain View, CA',
        description: 'Work on the next big thing',
        experience: '5 years',
        applyLink: 'https://careers.google.com/jobs/results/123456',
        minSalary: 18,
        maxSalary: 22,
        minExp: 2,
    }


  

  return (
    <Container maxWidth="sm">
    <Card sx='sm'>
        <Container>
        <Typography>Company</Typography>
        <Typography variant="h5" component="h2">
          {job.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {job.company} - {job.location}
        </Typography>
        </Container>
      <CardContent>
            <Typography>{`Estimated Salary: ${job.minSalary} - ${job.maxSalary} LPA`}</Typography>
            <Box>
                <Typography>About Company:</Typography>
                <Typography>About us</Typography>
                <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci consequuntur dolorum iusto excepturi hic iure, quas temporibus voluptas vitae non commodi reprehenderit sit recusandae nihil dolor labore quisquam iste tempora!</Typography>
                <Button>View More</Button>
         
          </Box>
          <Typography>
            Minimum Experience
          </Typography>
          <Typography>{`${job.minExp} years`}</Typography>
          <Button variant="contained" style={{ backgroundColor: '#69f0ae', color: 'black' }}>
            <a href={job.applyLink} style={{ textDecoration: 'none', color: 'black' }}>Apply</a>
          </Button>
      </CardContent>
    </Card>
    </Container>
  );
};

export default JobCard;
