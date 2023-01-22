import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
// import './Home.css';
// import './main.css';
import React from 'react';
import { IonLabel, IonCheckbox, IonButton, IonSlides, IonSlide } from '@ionic/react';

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const Slide3: React.FC = () => {
  return (
    <>
      <div>
        <h1>Slide 3 12321</h1>

        <div>
          <div>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>I agree to the terms and conditions</IonLabel>
          </div>

          <div>
            <IonButton href="/home">helloworld</IonButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide3;
