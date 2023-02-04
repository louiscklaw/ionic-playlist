import {
  IonContent, IonPage
} from '@ionic/react';
import React from 'react';
// import AboutPopover from '../../components/AboutPopover';

import './style.scss';

interface AboutProps {}

const MainTabs: React.FC<AboutProps> = () => {
  
  return (
    <>
      hello MainTabs
    </>
  );
};

export default React.memo(MainTabs);
