import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Post } from '../components/Post';
import { blogPosts } from '../localData';

const Home = () => {

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Ionic Blog</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
					<IonTitle size="large">Ionic Blog</IonTitle>
					</IonToolbar>
				</IonHeader>

				{ blogPosts.map((post, index) => (
					
					<Post post={ post } key={ `post_${ index }` } />
				))}
			</IonContent>
		</IonPage>
	);
};

export default Home;
