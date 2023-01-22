import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
// import './Home.css';
// import './main.css';
import React from 'react';
import {
  IonIcon,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonCheckbox,
  IonButton,
  IonSlides,
  IonSlide,
} from '@ionic/react';
import { warning } from 'ionicons/icons';

import slide4_png from './slide4.png';
import './skip_button.css';

const slide_text_style = { lineHeight: '2rem' };

const Slide4: React.FC = () => {
  return (
    <>
      <div style={{ height: '100%', width: '100%' }}>
        <div>
          <IonButton className="skip_button" href="/home">
            skip
          </IonButton>
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              paddingLeft: '5rem',
              paddingRight: '5rem',
            }}
          >
            <img src={slide4_png} />
          </div>
          <div style={{ marginTop: '3rem', fontWeight: 300, marginLeft: '3rem', marginRight: '3rem' }}>
            <IonText style={slide_text_style}>
              <h5>H3: The quick brown fox jumps over the lazy dog</h5>

              <p>待進變果沒致友環健問水法代人苦天。</p>
            </IonText>
            <div>
              <IonCheckbox slot="start"></IonCheckbox>
              <IonLabel>I agree to the terms and conditions</IonLabel>
            </div>

            <div>
              <IonButton href="/home">start</IonButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide4;
