import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import React from 'react';
import { IonButton, useIonPicker } from '@ionic/react';

function Example() {
  const [present] = useIonPicker();

  const openPicker = async () => {
    present({
      columns: [
        {
          name: 'meat',
          options: [
            {
              text: 'Pepperoni',
              value: 'pepperoni',
            },
            {
              text: 'Smoked Ham',
              value: 'smoked-ham',
            },
            {
              text: 'Crispy Bacon',
              value: 'bacon',
            },
          ],
        },
        {
          name: 'veggies',
          options: [
            {
              text: 'Red onion',
              value: 'red-onion',
            },
            {
              text: 'Peppers',
              value: 'peppers',
            },
            {
              text: 'Black olives',
              value: 'black-olives',
            },
          ],
        },
        {
          name: 'crust',
          options: [
            {
              text: 'Pan style',
              value: 'pan',
            },
            {
              text: 'Hand tossed',
              value: 'hand-tossed',
            },
            {
              text: 'Stuffed crust',
              value: 'stuffed-crust',
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
            window.alert(`You selected a ${value.crust.text} pizza with ${value.meat.text} and ${value.veggies.text}`);
          },
        },
      ],
    });
  };

  return <IonButton onClick={openPicker}>Open</IonButton>;
}

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Example />
        <a href="/">Back</a>
      </IonContent>
    </IonPage>
  );
};

export default Home;
