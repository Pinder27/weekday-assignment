import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Container,
  Link,

} from '@mui/material';



const JobCard = ({job}) => {
 

  return (
    <Container maxWidth="sm">
    <Card sx={{paddingTop:'20px',borderRadius:6,width:'300px'}}>
       <Box sx={{display:'inline-block',border:'1px solid rgb(230, 230, 230)',boxShadow:'rgb(6 6 6 / 5%) 0px 2px 6px 0px',borderRadius:3,marginLeft:'20px',marginBottom:'15px'}}>
        <Typography align='center' fontSize={10} sx={{padding:'4px'}}>⏳ Posted 10 days ago</Typography>
       </Box>
        <Box sx={{display:'flex',paddingLeft:'15px',marginBottom:'-15px'}}>
            <img width={30} height={50} alt='logo' src='https://storage.googleapis.com/weekday-assets/airtableAttachment_1713598306546_majma.jpg'/>
            <Box sx={{paddingLeft:'10px'}}>
        <Typography sx={{fontSize:'13px',fontWeight:600,color:'#8b8b8b'}}>{job.company?job.company:'Company'}</Typography>
        <Typography sx={{fontSize:'14px',fontWeight:400}}>
          {job.jobRole?job.jobRole:''}
        </Typography>
        <Typography sx={{fontSize:'11px',fontWeight:500}} >
          {job.location?job.location:''}
        </Typography>
        </Box>
        </Box>
      <CardContent>
            <Typography  sx={{fontSize:'14px',fontWeight:400,my:'8px'}}>{`Estimated Salary: ${job.minJdSalary?job.minJdSalary:''} - ${job.maxJdSalary?job.maxJdSalary:''} LPA  ✅`}
            </Typography>
            <Box sx={{mb:'20px'}} >
                <Typography sx={{fontSize:'1rem',fontWeight:600}}>About Company:</Typography>
                <Typography sx={{fontWeight:600}} >About us</Typography>
                <Box sx={{position:'relative'}}>
                <Typography sx={{position:'relative', maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',height:'200px' }}>
                    {job.jobDetailsFromCompany}
                </Typography>
                <Button sx={{position:'absolute',bottom:'-5px',left:'30%'}}><Link href={job.jdLink} sx={{color:'#4943da'}}>View job</Link></Button>
                </Box>
            </Box>
          
          <Typography>
            Minimum Experience
          </Typography>
          <Typography  gutterBottom>{`${job.minExp?job.minExp:'--'} years`}</Typography>
          <Button variant="contained" sx={{ backgroundColor: '#69f0ae', color: 'black',width:'100%',boxShadow:0 }}>
            <Typography>⚡ Easy Apply</Typography>
          </Button>
      </CardContent>
    </Card>
    </Container>
  );
};

export default JobCard;
