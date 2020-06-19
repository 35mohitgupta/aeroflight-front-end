import {createSelector} from 'reselect'

const flightsSelector = (state) => state.flightSearch.searchedFlight

export const bookFlightSelector = createSelector(
    flightsSelector,
    (_,flightNo) => flightNo,
    (flights,flightNo) => {
        const selectedFlight = flights.filter(flight => flightNo === flight.flightNo)
        return selectedFlight[0]
    }
)