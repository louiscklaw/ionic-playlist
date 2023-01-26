import { createSelector } from "reselect";

const getState = state => state;

//	Gets
export const getPeople = createSelector(getState, state => state.people);
export const getFollowing = createSelector(getState, state => state.people.filter(person => person.following));