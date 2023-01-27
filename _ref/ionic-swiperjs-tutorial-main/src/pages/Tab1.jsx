import { IonCard, IonCardContent, IonCardTitle, IonContent, IonHeader, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

const Tab1 = () => {

	const data = [

		{
			title: "Road",
			subtitle: "Long road",
			image: "/assets/road.jpeg"
		},
		{
			title: "Mountains",
			subtitle: "Big mountains",
			image: "/assets/mountains.jpeg"
		},
		{
			title: "Unknown",
			subtitle: "This is unknown",
			image: "/assets/unknown.jpeg"
		}
	];

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 1</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tab 1</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name="Tab 1 page" />

				<Swiper spaceBetween={ 40 } slidesPerView={ 2 }>
					{ data.map((card, index) => {

						return (

							<SwiperSlide key={ `slide_${ index }` }>
								<IonCard routerLink="/tab2">
									<img src={ card.image } alt="card" className="image" />

									<IonCardContent>
										<IonCardTitle className="title">{ card.title }</IonCardTitle>
										<IonNote className="subtitle">{ card.subtitle }</IonNote>
									</IonCardContent>
								</IonCard>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</IonContent>
		</IonPage>
	);
};

export default Tab1;
