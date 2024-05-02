

import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import {setFilters} from '../../redux/slices/filters/filterSlice'


import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function FilterMinBasePay() {
  
  const [inputValue, setInputValue] = React.useState('');
   const filters = useSelector(state => state.filter.value)
     const value = filters.role
     console.log("role",value);
     const dispatch = useDispatch()
  const pays = [
        {label: "0 LPA", value: 0},
        {label: "10 LPA", value: 10},
        {label: "20 LPA", value: 20},
        {label: "30 LPA", value: 30},
        {label: "40 LPA", value: 40},
        {label: "50 LPA", value: 50},
        {label: "60 LPA", value: 60},
        {label: "70 LPA", value: 70},
        {label: "80 LPA", value: 80},
      ]

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
            const newFilter ={...filters};
                  if(newValue === null){
                    newFilter.minPay = 0
                  }
                 else newFilter.minPay = newValue.value
                dispatch(setFilters(newFilter));
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={pays}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Minimum Base Pay" />}
      />
    </div>
  );
}
