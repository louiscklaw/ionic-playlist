import './ExploreContainer.css';

import Home from '../pages/Home';

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return <>helloworld</>;
};

export default ExploreContainer;
