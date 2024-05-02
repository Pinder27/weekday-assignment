


import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import {setFilters} from '../../redux/slices/filters/filterSlice'


import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function FilterMinExp() {
  
  const [inputValue, setInputValue] = React.useState('');
   const filters = useSelector(state => state.filter.value)
     const value = filters.role
     console.log("role",value);
     const dispatch = useDispatch()
  const experiences = [
        {label: "0 year", value: 0},
        {label: "1 year", value: 1},
        {label: "2 years", value: 2},
        {label: "3 years", value: 3},
        {label: "4 years", value: 4},
        {label: "5 years", value: 5},
        {label: "6 years", value: 6},
        {label: "7 years", value: 7},
        {label: "8 years", value: 8},
        {label: "9 years", value: 9},
        {label: "10 years", value: 10}
        
      ]

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
            const newFilter ={...filters};
                  if(newValue === null){
                    newFilter.minExp = 0
                  }
                 else newFilter.minExp = newValue.value
                dispatch(setFilters(newFilter));
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={experiences}
        sx={{ width: 220 }}
        renderInput={(params) => <TextField {...params} label="Minimum Experience" />}
      />
    </div>
  );
}
