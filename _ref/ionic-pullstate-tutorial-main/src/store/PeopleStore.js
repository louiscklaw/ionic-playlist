import { Store } from "pullstate";

import { people } from "../data";

const PeopleStore = new Store({

	people: people
});

export const toggleFollowing = personId => {

	PeopleStore.update(s => {

		const personIndex = s.people.findIndex(person => person.id === personId);
		s.people[personIndex].following = !s.people[personIndex].following;
	});
}

export default PeopleStore;