import { CREATED_FLIGHT } from "./actionTypes"

export const createdFlight = (message) => {
   return {
    type: CREATED_FLIGHT,
    message
    }
}