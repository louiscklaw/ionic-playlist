import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
// import './Home.css';
// import './main.css';
import React from 'react';
import { IonSlides, IonSlide } from '@ionic/react';
import Slide3 from './Slide3';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const Home: React.FC = () => {
  return (
    <IonContent>
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide>
          <h1>Slide 1</h1>
        </IonSlide>
        <IonSlide>
          <h1>Slide 2</h1>
        </IonSlide>
        <IonSlide>
          <Slide3 />
        </IonSlide>
      </IonSlides>
    </IonContent>
  );
};

export default Home;
