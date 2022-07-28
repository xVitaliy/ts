import { useState } from 'react';
import { Button, TextField } from '@mui/material';

type SearchCustom = {
  searchTodo: (text: string) => void;
};

export const SearchCustomComponent = ({ searchTodo }: SearchCustom) => {
  const [inputValue, setInputValue] = useState('');
  const handleSearch = () => {
    searchTodo(inputValue);
    setInputValue('');
  };
  const handleReset = () => searchTodo('');
  return (
    <>
      <TextField
        sx={{ width: '350px' }}
        value={inputValue}
        onChange={(e) => setInputValue(e?.target?.value)}
      />
      <Button
        onClick={handleSearch}
        variant={'contained'}
        sx={{ marginLeft: '40px' }}
      >
        Search
      </Button>
      <Button
        onClick={handleReset}
        variant={'contained'}
        sx={{ marginLeft: '40px' }}
      >
        Reset Search
      </Button>
    </>
  );
};
