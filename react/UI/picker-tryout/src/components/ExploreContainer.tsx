import './ExploreContainer.css';
import React from 'react';
import { IonButton, useIonPicker } from '@ionic/react';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [present] = useIonPicker();

  const openPicker = async () => {
    present({
      columns: [
        {
          name: 'languages',
          options: [
            {
              text: 'JavaScript',
              value: 'javascript',
            },
            {
              text: 'TypeScript',
              value: 'typescript',
            },
            {
              text: 'Rust',
              value: 'rust',
            },
            {
              text: 'C#',
              value: 'c#',
            },
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: value => {
            window.alert(`You selected: ${value.languages.value}`);
          },
        },
      ],
    });
  };

  return <IonButton onClick={openPicker}>Open</IonButton>;
};

export default ExploreContainer;
