import { Middleware } from "@reduxjs/toolkit";

export const customMiddlewareLogger: Middleware =
  (store) => (next) => (action) => {
    console.log("dispatching", action);
    console.log("prev state", store.getState());
    const result = next(action);
    console.log("next state", store.getState());

    return result;
  };
