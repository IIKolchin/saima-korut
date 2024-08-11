import React from 'react';
import {
  Select,
  MenuItem,
  SelectProps,
  styled,
  SelectChangeEvent,
} from '@mui/material';
import ArrrowIconImage from '../../assets/images/arrow.svg';

const CustomIcon = styled('img')({
  width: 19,
  height: 12,
});

const CustomSelect = styled((props: SelectProps) => (
  <Select
    {...props}
    IconComponent={() => <CustomIcon src={ArrrowIconImage} alt="custom icon" />}
  />
))(({ theme }) => ({
  minWidth: '146px',
  color: 'rgb(63, 63, 63)',
  fontFamily: 'Roboto',
  fontSize: '22px',
  fontWeight: '400',
  lineHeight: '120%',
  '& .MuiSelect-icon': {
    top: 'calc(50% - 12px)',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.dark,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.light,
  },
}));

const options = ['Suomi', 'Englanti'];

const CustomSelectComponent: React.FC = () => {
  const [value, setValue] = React.useState<string>('Suomi');

  console.log(value);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setValue(event.target.value as string);
  };

  return (
    <CustomSelect value={value} onChange={handleChange}>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

export default CustomSelectComponent;
