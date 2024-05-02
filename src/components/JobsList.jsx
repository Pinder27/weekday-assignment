
import { Grid, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import {  offsetIncrement } from '../redux/slices/offsetSlice'
import { jobListIncrement } from '../redux/slices/jobListSlice';
import React, { useEffect,useState} from 'react';
import JobCard from './jobCard';

const JobList = () => {
    const offset = useSelector(state => state.offset.value)
    const jobList = useSelector(state => state.jobList.value)

    const filters = useSelector(state => state.filter.value)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    console.log(jobList);
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
            dispatch(jobListIncrement(data.jdList)); // Append newly fetched data
            setIsLoading(false);
            dispatch(offsetIncrement()) // Increment for next 10 records
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
            dispatch(jobListIncrement(data.jdList)); // Append newly fetched data
            setIsLoading(false);
            dispatch(offsetIncrement()); // Increment for next 10 records
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
      

     console.log("filters",filters);

     const filteredJobList =  jobList.filter((job) => { 
        return (job.minExp >= filters.minExp && 
            (filters.role === '' || job.jobRole === filters.role)&&
            (job.minJdSalary >= filters.minPay)
        );
      })// Filter jobs based on minimum experience}
   

    return (
        <>
            <Grid container spacing={2}>
                {filteredJobList.map((job,index) => (
                    <Grid item key={index}>
                     <JobCard job={job} />
                   </Grid>
                ))}
            </Grid>
            {isLoading && <Typography p={5} variant='h5' align='center'>Loading...</Typography>}
        </>
    );
};

export default JobList;