/* eslint-disable */
import * as GENERATED from '../../generated/graphql';
import { GET_TODOS } from '../../queries/getTodos';
import { TodosQuery } from '../../generated/graphql';

export const useUpdatedTodoSubscription = () => {
  return GENERATED.useUpdateTodoSubscription();
};

// !!
//{
//     onSubscriptionData: ({ client, subscriptionData }) => {
//       // метод обработки кэша
//       const cacheData = client.cache.readQuery<TodosQuery>({
//         // получаем существующий кэш
//         query: GET_TODOS, // текущая полка с кверёй
//       });
//       // console.log('cacheData', cacheData);
//       // console.log(1, subscriptionData.data?.updatedTodo);
//       // console.log(2, cacheData?.todos?.edges);
//
//       client.cache.writeQuery({
//         // перезаписываем новые данные в кэш
//         query: GET_TODOS, // текущая полка с кверёй
//         // внутренний объект кэша
//         data: {
//           // наша кверя
//           todos: {
//             //  поле из квери для счета кол-ва всех объектов в массиве
//             total: (cacheData?.todos?.total || 0) + 1, //
//             // собираем наш новый массив
//             edges: [
//               subscriptionData.data?.updatedTodo,
//               ...(cacheData?.todos?.edges || []),
//             ],
//           },
//         },
//       });
//
//       // const newData = subscriptionData.data?.updatedTodo;
//       // client.cache.updateQuery(
//       //   {
//       //     query: GET_TODOS, // текущая полка с кверёй
//       //   },
//       //   (data) => {
//       //     console.log(1111, data);
//       //     if (data) {
//       //       return {
//       //         todos: {
//       //           ...data.todos,
//       //           total: data.todos.total + 1,
//       //           edges: [newData, ...(data.todos.edges || [])],
//       //         },
//       //       };
//       //     }
//       //   },
//       // );
//     },
//   }

//!!!
// (data) => {
//   // наша кверя
//   todos: {
//     //  поле из квери для счета кол-ва всех объектов в массиве
//     total: (cacheData?.todos?.total || 0) + 1, //
//       // собираем наш новый массив
//       edges: [
//       subscriptionData.data?.updatedTodo,
//       ...(cacheData?.todos?.edges || []),
//     ],
//   },
// },
//useNotificationCreatedSubscription({
//     onSubscriptionData: ({ subscriptionData, client }) => {
//       showToast({
//         title: subscriptionData.data?.notificationCreated?.title,
//         description: subscriptionData?.data?.notificationCreated?.text,
//       });

// const cacheData = client.cache.readQuery<GetNotificationsQuery>({
//   query: GET_NOTIFICATIONS,
//   variables: {
//     limit: NOTIFICATION_LIMIT,
//   },
// });
//       client.cache.writeQuery({
//         query: GET_NOTIFICATIONS,
//         variables: {
//           limit: NOTIFICATION_LIMIT,
//         },
//         data: {
//           getNotifications: {
//             count: (cacheData?.getNotifications?.count || 0) + 1,
//             rows: [
//               subscriptionData.data?.notificationCreated,
//               ...(cacheData?.getNotifications?.rows || []),
//             ],
//           },
//         },
//       });
//     },
//   });

// ? client.cache.writeQuery({
//         // перезаписываем новые данные в кэш
//         query: GET_TODOS, // текущая полка с кверёй
//         // внутренний объект кэша
//         data: {
//           // наша кверя
//           todos: {
//             //  поле из квери для счета кол-ва всех объектов в массиве
//             total: (cacheData?.todos?.total || 0) + 1, //
//             // собираем наш новый массив
//             edges: [
//               subscriptionData.data?.updatedTodo,
//               ...(cacheData?.todos?.edges || []),
//             ],
//           },
//         },
//       })
