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

import slide1_png from './slide2.png';

const slide_text_style = { lineHeight: '2rem' };

const Slide2: React.FC = () => {
  return (
    <>
      <div>
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
            <img src={slide1_png} />
          </div>
          <div style={{ marginTop: '3rem', fontWeight: 300, marginLeft: '3rem', marginRight: '3rem' }}>
            <IonText style={slide_text_style}>
              <h5>H3: The quick brown fox jumps over the lazy dog</h5>

              <p>
                待進變果沒致友環健問水法代人苦天。 業立臺四即文善公作有往，等怕準命小電個。
                阪ハウワ応92勤常勉旋72依過らつ。門むば隊就メツヘ突長山テ碁人ゆッ Lorem der of human happiness. No one
                rejects, dislikes, or avoids pleasure itself
              </p>
            </IonText>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide2;
