/* eslint-disable */
import * as GENERATED from '../../generated/graphql';
import { TodosQuery } from '../../generated/graphql';
import { GET_TODOS } from '../../queries/getTodos';

export const useRemoveTodoSubscription = () => {
  return GENERATED.useRemovedTodoSubscription();
};

//{
//     onSubscriptionData: ({ client, subscriptionData }) => {
//       // метод обработки кэша
//       const cacheData = client.cache.readQuery<TodosQuery>({
//         // получаем существующий кэш
//         query: GET_TODOS, // текущая полка с кверёй
//       });
//
//       client.cache.writeQuery({
//         // перезаписываем новые данные в кэш
//         query: GET_TODOS, // текущая полка с кверёй
//         // внутренний объект кэша
//         data: {
//           // наша кверя
//           todos: {
//             //  поле из квери для счета кол-ва всех объектов в массиве
//             total: (cacheData?.todos?.total || 0) - 1, //
//             // собираем наш новый массив
//             edges: [
//               subscriptionData.data?.removedTodo,
//               ...(cacheData?.todos?.edges || []),
//             ],
//           },
//         },
//       });
//     },
//   }
