import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import './main.css';
import React from 'react';
import { IonButton, IonSlides, IonSlide } from '@ionic/react';

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const Home: React.FC = () => {
  return (
    <IonContent>
      <IonPage>
        <div>This is home </div>
        <IonButton href="/tour1">restart tour</IonButton>
      </IonPage>
    </IonContent>
  );
};

export default Home;
