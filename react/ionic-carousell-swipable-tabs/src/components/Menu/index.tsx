import React from 'react';
import { RouteComponentProps, withRouter, useLocation } from 'react-router';

import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import {
  calendarOutline,
  hammer,
  moonOutline,
  help,
  informationCircleOutline,
  logIn,
  logOut,
  mapOutline,
  peopleOutline,
  person,
  personAdd,
} from 'ionicons/icons';

import './Menu.css';

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  // bookmark: left menu
  return <>Menu Content 123321</>;
};

export default Menu;
