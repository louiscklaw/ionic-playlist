import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { PeopleStore } from '../store';
import { Person } from "../components/Person";
import './Tab1.css';
import { useStoreState } from 'pullstate';
import { getPeople } from '../store/Selectors';

const Tab1 = () => {

	const people = useStoreState(PeopleStore, getPeople);

	console.log(people);
	
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>List of People</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">List of People</IonTitle>
					</IonToolbar>
				</IonHeader>

				{ people.map((person, index) => {

					return <Person person={ person } key={ index } />;
				})}
			</IonContent>
		</IonPage>
	);
};

export default Tab1;
