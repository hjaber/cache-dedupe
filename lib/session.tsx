import { cache } from "react";
import "server-only";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const preload = (id: number) => {
  void getSession(id);
};

export const getSession = cache(async (id: number) => {
  await delay(1000); // simulate a delay of 1 second
  const userSession = {
    id: id,
    username: `user${id}`,
    email: `user${id}@example.com`,
    token: Math.random().toString(36).substring(7), // random token
  };
  return Promise.resolve(userSession);
});

// export const getSession = cache(async (id: number) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const userSession = {
//         id: id,
//         username: `user${id}`,
//         email: `user${id}@example.com`,
//         token: Math.random().toString(36).substring(7), // random token
//       };
//       resolve(userSession);
//     }, 1000); // simulate a delay of 1 second
//   });
// });
