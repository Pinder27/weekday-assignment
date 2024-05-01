
import { Grid, Typography } from '@mui/material';
import React, { useEffect,useState} from 'react';
import JobCard from './jobCard';

const JobList = () => {
    const [offset,setOffset] = useState(0); 
    const [JobList,setJobList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    console.log(JobList);
     // Fetch data on initial load
    useEffect(() => {
       
          setIsLoading(true);
          fetch(`https://api.weekday.technology/adhoc/getSampleJdJSON`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                limit: 10,
                offset: offset
            })
        })
        .then((response) => response.json())
        .then((data) => {
            setJobList((prevList) => [...prevList, ...data.jdList]); // Append newly fetched data
            setIsLoading(false);
            setOffset(offset+10); // Increment for next 10 records
        })
        .catch((error) => {
            console.error(error);
            setIsLoading(false);
        });
          
      }, []);


      // Fetch data on scroll

    const loadJobs = () => {
        setIsLoading(true);
        fetch(`https://api.weekday.technology/adhoc/getSampleJdJSON`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                limit: 10,
                offset: offset
            })
        })
        .then((response) => response.json())
        .then((data) => {
            setJobList((prevList) => [...prevList, ...data.jdList]); // Append newly fetched data
            setIsLoading(false);
            setOffset(offset+10); // Increment for next 10 records
        })
        .catch((error) => {
            console.error(error);
            setIsLoading(false);
        });
    };

   // Load more data on scroll
    useEffect(() => {
        const handleScroll = () => {
          const { scrollTop, clientHeight, scrollHeight } =
            document.documentElement;
          if (scrollTop + clientHeight >= scrollHeight - 20) {
            loadJobs();
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

   

    return (
        <>
            <Grid container spacing={2}>
                {JobList.map((job,index) => (
                    <Grid item key={index}>
                     <JobCard job={job} />
                   </Grid>
                ))}
            </Grid>
            {isLoading && <Typography p={5} variant='h1' align='center'>Loading...</Typography>}
        </>
    );
};

export default JobList;