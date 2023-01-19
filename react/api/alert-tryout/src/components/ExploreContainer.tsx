import React, { useState } from 'react';

import './ExploreContainer.css';
import { IonButton, useIonAlert } from '@ionic/react';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState('');
  const [roleMessage, setRoleMessage] = useState('');

  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
          UI Components
        </a>
        <IonButton
          onClick={() =>
            presentAlert({
              header: 'Alert',
              subHeader: 'Important message',
              message: 'This is an alert!',
              buttons: ['OK'],
            })
          }
        >
          Click Me
        </IonButton>

        <div>
          <IonButton
            onClick={() =>
              presentAlert({
                header: 'Alert!',
                buttons: [
                  {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                      setHandlerMessage('Alert canceled');
                    },
                  },
                  {
                    text: 'OK',
                    role: 'confirm',
                    handler: () => {
                      setHandlerMessage('Alert confirmed');
                    },
                  },
                ],
                onDidDismiss: (e: CustomEvent) => setRoleMessage(`Dismissed with role: ${e.detail.role}`),
              })
            }
          >
            Click Me
          </IonButton>
          <p>{handlerMessage}</p>
          <p>{roleMessage}</p>
        </div>
      </p>
    </div>
  );
};

export default ExploreContainer;
