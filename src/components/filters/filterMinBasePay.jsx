import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../../redux/slices/filters/filterSlice';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FilterMinBasePay() {
  // State for input value
  const [inputValue, setInputValue] = React.useState('');
  
  // Get filters from Redux store
  const filters = useSelector(state => state.filter.value);
  
  // Selected value
  const value = filters.minPay;
  
  // Redux dispatch function
  const dispatch = useDispatch();
  
  // Available pay options
  const pays = [
    { label: "0 LPA", value: 0 },
    { label: "10 LPA", value: 10 },
    { label: "20 LPA", value: 20 },
    { label: "30 LPA", value: 30 },
    { label: "40 LPA", value: 40 },
    { label: "50 LPA", value: 50 },
    { label: "60 LPA", value: 60 },
    { label: "70 LPA", value: 70 },
    { label: "80 LPA", value: 80 },
  ];

  return (
    <div>
      {/* Autocomplete component for selecting minimum base pay */}
      <Autocomplete
        value={pays.find(option => option.value === value)}
        onChange={(event, newValue) => {
          // Create a new filter object with updated minimum base pay value
          const newFilter = { ...filters, minPay: newValue ? newValue.value : 0 };
          
          // Dispatch action to update filters in Redux store
          dispatch(setFilters(newFilter));
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          // Update input value state
          setInputValue(newInputValue);
        }}
        id="controllable-states-filterMinBasePay"
        options={pays}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Minimum Base Pay" />}
      />
    </div>
  );
}
