import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../../redux/slices/filters/filterSlice';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FilterMinExp() {
  // State for input value
  const [inputValue, setInputValue] = React.useState('');
  
  // Get filters from Redux store
  const filters = useSelector(state => state.filter.value);
  
  // Selected value
  const value = filters.minExp;
  
  // Redux dispatch function
  const dispatch = useDispatch();
  
  // Available experiences for selection
  const experiences = [
    { label: "0 year", value: 0 },
    { label: "1 year", value: 1 },
    { label: "2 years", value: 2 },
    { label: "3 years", value: 3 },
    { label: "4 years", value: 4 },
    { label: "5 years", value: 5 },
    { label: "6 years", value: 6 },
    { label: "7 years", value: 7 },
    { label: "8 years", value: 8 },
    { label: "9 years", value: 9 },
    { label: "10 years", value: 10 }
  ];

  return (
    <div>
      {/* Autocomplete component for selecting minimum experience */}
      <Autocomplete
        value={experiences.find(option => option.value === value)}
        onChange={(event, newValue) => {
          // Create a new filter object with updated minimum experience value
          const newFilter = { ...filters, minExp: newValue ? newValue.value : 0 };
          
          // Dispatch action to update filters in Redux store
          dispatch(setFilters(newFilter));
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          // Update input value state
          setInputValue(newInputValue);
        }}
        id="controllable-states-filterMinExp"
        options={experiences}
        sx={{ width: 220 }}
        renderInput={(params) => <TextField {...params} label="Minimum Experience" />}
      />
    </div>
  );
}
