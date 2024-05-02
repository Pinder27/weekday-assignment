import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import {setFilters} from '../../redux/slices/filters/filterSlice'



import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function FilterRole() {
  
  const [inputValue, setInputValue] = React.useState('');
  const filters = useSelector(state => state.filter.value)
     const value = filters.role
     console.log("role",value);
     const dispatch = useDispatch()
  const roles = [
        {label: "Software Engineer", value: "Software Engineer"},
        {label: "Frontend Developer", value: "frontend"},
        {label: "Backend Developer", value: "Backend"},
        {label: "Full Stack Developer", value: "FullStack "},
        {label: "DevOps Engineer", value: "DevOps"},
        {label: "Data Scientist", value: "Data Scientist"},
      ]

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
            const newFilter ={...filters};
                  if(newValue === null){
                    newFilter.role = ''
                  }
                 else newFilter.role = newValue.value
                dispatch(setFilters(newFilter));
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={roles}
        sx={{ width: 100 }}
        renderInput={(params) => <TextField {...params} label="Role" />}
      />
    </div>
  );
}
