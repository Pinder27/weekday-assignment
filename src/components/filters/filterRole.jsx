import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../../redux/slices/filters/filterSlice';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FilterRole() {
  // State for selected values and input value
  const [value, setValue] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  
  // Get filters from Redux store
  const filters = useSelector(state => state.filter.value);
  
  // Redux dispatch function
  const dispatch = useDispatch();
  
  // Available roles for selection
  const roles = [
    { label: "Ios Developer", value: "ios" },
    { label: "Android Developer", value: "android" },
    { label: "Tech Lead", value: "tech lead" },
    { label: "Backend Developer", value: "backend" },
  ];

  return (
    <>
      {/* Autocomplete component for role selection */}
      <Autocomplete
        multiple
        value={value}
        onChange={(event, newValue) => {
          // Update input value state
          setInputValue('');
          
          // Map selected values to their corresponding values
          const selectedValues = newValue.map(option => option.value);
          
          // Create a new filter object with updated role values
          const newFilter = { ...filters, role: selectedValues };
          
          // Dispatch action to update filters in Redux store
          dispatch(setFilters(newFilter));
          
          // Update selected values state
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          // Update input value state
          setInputValue(newInputValue);
        }}
        id="controllable-states-filterRole"
        options={roles}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Role" />}
      />
    </>
  );
}
