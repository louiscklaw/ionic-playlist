import ExploreContainer from '../components/ExploreContainer';
import { IonButtons, IonMenuButton } from '@ionic/react';

import React, { useState } from 'react';

import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
  IonNavLink,
} from '@ionic/react';

import './Home.css';
import Home from './Home';

const MenuToggle: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton>Click to close the menu</IonButton>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton>Click to open the menu</IonButton>
          </IonMenuToggle>
        </IonContent>

        <IonNavLink routerDirection="back" component={() => <Home />}>
          <IonButton>back to home</IonButton>
        </IonNavLink>
      </IonPage>
    </>
  );
};

export default MenuToggle;
