import { IonNavLink, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React from 'react';
import { IonButtons, IonMenu, IonMenuButton } from '@ionic/react';
import { IonNav } from '@ionic/react';

import MenuTypes from './MenuTypes';

import './Home.css';
import MenuToggle from './MenuToggle';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Page One</h1>
        <IonNavLink routerDirection="forward" component={() => <MenuTypes />}>
          <IonButton>Go to Page MenuTypes</IonButton>
        </IonNavLink>

        <IonNavLink routerDirection="forward" component={() => <MenuToggle />}>
          <IonButton>Go to Page Toggle</IonButton>
        </IonNavLink>
      </IonContent>
    </IonPage>
  );
};

export default Home;
