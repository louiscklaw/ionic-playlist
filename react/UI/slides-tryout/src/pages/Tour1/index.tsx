import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
// import './Home.css';
// import './main.css';
import React from 'react';
import { IonSlides, IonSlide } from '@ionic/react';
import Slide3 from './Slide3';
import Slide2 from './Slide2';
import Slide1 from './Slide1';
import Slide4 from './Slide4';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const config = { showSkip: true };

const Home: React.FC = () => {
  return (
    <IonContent>
      <div
        style={{
          position: 'fixed',
          zIndex: 9999,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',

          height: '30px',
        }}
      >
        <div style={{ flexGrow: 1 }}>{}</div>
        <div>
          {config.showSkip ? (
            <IonButton className="skip_button" href="/home">
              skip
            </IonButton>
          ) : (
            <></>
          )}
        </div>
      </div>
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide>
          <Slide1 />
        </IonSlide>
        <IonSlide>
          <Slide2 />
        </IonSlide>
        <IonSlide>
          <Slide3 />
        </IonSlide>
        <IonSlide>
          <Slide4 />
        </IonSlide>
      </IonSlides>
    </IonContent>
  );
};

export default Home;
