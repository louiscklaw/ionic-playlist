import React from 'react';
import { RouteComponentProps, withRouter, useLocation } from 'react-router';

import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonToggle,
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

const Menu: React.FC<MenuProps> = () =>{
  return (
    <>Menu placeholder</>
  )
}