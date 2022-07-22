import { Box, Typography } from '@mui/material';
import React from 'react';
import {
  RemovedTodoSubscription,
  SubscriptionUpdateTodoSubscription,
} from '../../graphql/generated/graphql';

type SubscriptionBlockType = {
  updatedTodoSubscription: SubscriptionUpdateTodoSubscription;
  removeTodoSubscription: RemovedTodoSubscription;
};

export const SubscriptionBlock: React.FC<SubscriptionBlockType> = ({
  updatedTodoSubscription,
  removeTodoSubscription,
}) => {
  return (
    <>
      <Box sx={{ height: '310px' }}>
        <Typography variant={'h2'}>Update Subscribe</Typography>
        <pre style={{ fontSize: '26px' }}>
          {JSON.stringify(updatedTodoSubscription?.updatedTodo, null, 2)}
        </pre>
      </Box>
      <Box>
        <Typography variant={'h2'}>Remove Subscribe</Typography>
        <pre style={{ fontSize: '26px' }}>
          {JSON.stringify(removeTodoSubscription?.removedTodo, null, 2)}
        </pre>
      </Box>
    </>
  );
};
