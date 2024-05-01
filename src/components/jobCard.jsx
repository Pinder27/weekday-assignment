import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Container,
  Fade,
} from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BoltIcon from '@mui/icons-material/Bolt';



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
    <Card sx={{paddingTop:'20px',borderRadius:6,width:'300px'}}>
       <Box sx={{border:'1px solid',borderRadius:5,width:200,marginLeft:'10px',marginBottom:'10px'}}>
        <Typography align='center' sx={{padding:'4px'}}>⏳ Posted 10 days ago</Typography>
       </Box>
        <Container sx={{display:'flex',margin:0,padding:0}}>
            <img width={30} height={50} src='https://storage.googleapis.com/weekday-assets/airtableAttachment_1713598306546_majma.jpg'/>
            <Container>
        <Typography>Company</Typography>
        <Typography component="h2">
          {job.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" >
          {job.company} - {job.location}
        </Typography>
        </Container>
        </Container>
      <CardContent>
            <Typography>{`Estimated Salary: ${job.minSalary} - ${job.maxSalary} LPA`}
            <CheckBoxIcon color='success' sx={{height:'25px'}}/>
            </Typography>
            <Box>
                <Typography variant='h5'>About Company:</Typography>
                <Typography>About us</Typography>
                <Typography  paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci consequuntur dolorum iusto excepturi hic iure, quas temporibus voluptas vitae non commodi reprehenderit sit recusandae nihil dolor labore quisquam iste tempora!</Typography>
                <Button><Typography>View job</Typography></Button>
         
          </Box>
          <Typography>
            Minimum Experience
          </Typography>
          <Typography  gutterBottom>{`${job.minExp} years`}</Typography>
          <Button variant="contained" style={{ backgroundColor: '#69f0ae', color: 'black',width:'100%' }}>
            <BoltIcon sx={{color:'#ffb400'}} />
            <Typography>Easy Apply</Typography>
          </Button>
      </CardContent>
    </Card>
    </Container>
  );
};

export default JobCard;
