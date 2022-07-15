import { Box, Button } from '@mui/material';
import { useGetTodos } from '../../graphql/hooks/useQueries/useGetTodos';

export const TestingGqlPage = () => {
  const handleGetTodos = () => {
    useGetTodos({
      variables: {
        data: {
          limit: null,
        },
      },
    });
  };
  return (
    <Box>
      <Button onClick={handleGetTodos}>getTodos</Button>
    </Box>
  );
};
