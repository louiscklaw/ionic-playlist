import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { globe } from 'ionicons/icons';

import React, { useState } from 'react';
import { IonButton, useIonToast } from '@ionic/react';

const Home: React.FC = () => {
  const [present] = useIonToast();

  const [handlerMessage, setHandlerMessage] = useState('');
  const [roleMessage, setRoleMessage] = useState('');
  const [presentToast_dismissable] = useIonToast();
  const [presentToast_icon_button] = useIonToast();
  const [presentToast] = useIonToast();

  const presentToast_1 = (position: 'top' | 'middle' | 'bottom') => {
    present({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonButton expand="block" onClick={() => presentToast_1('top')}>
        Present Toast At the Top
      </IonButton>
      <IonButton expand="block" onClick={() => presentToast_1('middle')}>
        Present Toast At the Middle
      </IonButton>

      <IonButton
        onClick={() => {
          presentToast_dismissable({
            message: 'Hello World!',
            duration: 3000,
            onDidDismiss: (e: CustomEvent) => setRoleMessage(`Dismissed with role: ${e.detail.role}`),
            buttons: [
              {
                text: 'More Info',
                role: 'info',
                handler: () => {
                  setHandlerMessage('More Info clicked');
                },
              },
              {
                text: 'Dismiss',
                role: 'cancel',
                handler: () => {
                  setHandlerMessage('Dismiss clicked');
                },
              },
            ],
          });
        }}
      >
        Click Me dismissable
      </IonButton>
      <p>{handlerMessage}</p>
      <p>{roleMessage}</p>

      <IonButton
        onClick={() => {
          presentToast_icon_button({ message: 'Hello World!', duration: 1500, icon: globe });
        }}
      >
        Click Me (icon button)
      </IonButton>

      <IonButton
        onClick={() =>
          presentToast({
            message: 'Hello Styled World!',
            duration: 3000,
            cssClass: 'custom-toast',
            buttons: [{ text: 'Dismiss', role: 'cancel' }],
          })
        }
      >
        Click Me (styling)
      </IonButton>

      <IonButton expand="block" onClick={() => presentToast_1('bottom')}>
        Present Toast At the Bottom
      </IonButton>
    </IonPage>
  );
};

export default Home;
