import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
// import AboutPopover from '../../components/AboutPopover';

import './style.scss';

interface AboutProps {}

const SampleBlank: React.FC<AboutProps> = () => {
  return (
    <IonPage id="sample-blank-page">
      <IonContent>hello sample page</IonContent>
    </IonPage>
  );
};

export default React.memo(SampleBlank);
