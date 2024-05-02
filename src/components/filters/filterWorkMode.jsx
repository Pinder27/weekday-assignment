import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import {setFilters} from '../../redux/slices/filters/filterSlice'


import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function FilterWorkMode() {
  
  const [inputValue, setInputValue] = React.useState('');
   const filters = useSelector(state => state.filter.value)
     const value = filters.role
     console.log("role",value);
     const dispatch = useDispatch()
  const modes = [
        {label: "Remote", value: "remote"},
        {label: "Hybrid", value: "hybrid"},
        {label: "In-Office", value: "in-office"},
      ]

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
            const newFilter ={...filters};
                  if(newValue === null){
                    newFilter.workMode = ''
                  }
                 else newFilter.workMode = newValue.value
                dispatch(setFilters(newFilter));
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-filterWorkMode"
        options={modes}
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} label="workMode" />}
      />
    </div>
  );
}
