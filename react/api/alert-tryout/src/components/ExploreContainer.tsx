import React, { useState } from 'react';

import './ExploreContainer.css';

import { IonButton, useIonAlert } from '@ionic/react';

import './main.css';

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
        <div>
          <IonButton
            onClick={() =>
              presentAlert({
                header: 'Please enter your info',
                buttons: ['OK'],
                inputs: [
                  {
                    placeholder: 'Name',
                  },
                  {
                    placeholder: 'Nickname (max 8 characters)',
                    attributes: {
                      maxlength: 8,
                    },
                  },
                  {
                    type: 'number',
                    placeholder: 'Age',
                    min: 1,
                    max: 100,
                  },
                  {
                    type: 'textarea',
                    placeholder: 'A little about yourself',
                  },
                ],
              })
            }
          >
            Click Me
          </IonButton>
        </div>
        <div>
          <IonButton
            onClick={() =>
              presentAlert({
                header: 'Select your favorite color',
                buttons: ['OK'],
                inputs: [
                  {
                    label: 'Red',
                    type: 'radio',
                    value: 'red',
                  },
                  {
                    label: 'Blue',
                    type: 'radio',
                    value: 'blue',
                  },
                  {
                    label: 'Green',
                    type: 'radio',
                    value: 'green',
                  },
                ],
              })
            }
          >
            Click Me (radio)
          </IonButton>
        </div>
        <div>
          <IonButton
            onClick={() =>
              presentAlert({
                header: 'Are you sure?',
                cssClass: 'custom-alert',
                buttons: [
                  {
                    text: 'No',
                    cssClass: 'alert-button-cancel',
                  },
                  {
                    text: 'Yes',
                    cssClass: 'alert-button-confirm',
                  },
                ],
              })
            }
          >
            Click Me customize
          </IonButton>
        </div>
      </p>
    </div>
  );
};

export default ExploreContainer;
