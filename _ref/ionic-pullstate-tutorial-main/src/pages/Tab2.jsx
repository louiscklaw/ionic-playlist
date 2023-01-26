import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useStoreState } from 'pullstate';
import { Person } from '../components/Person';
import { PeopleStore } from '../store';
import { getFollowing } from '../store/Selectors';
import './Tab2.css';

const Tab2 = () => {

	const people = useStoreState(PeopleStore, getFollowing);
	
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Following</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Following</IonTitle>
					</IonToolbar>
				</IonHeader>

				{ people.map((person, index) => {

					return <Person person={ person } key={ index } />;
				})}
			</IonContent>
		</IonPage>
	);
};

export default Tab2;