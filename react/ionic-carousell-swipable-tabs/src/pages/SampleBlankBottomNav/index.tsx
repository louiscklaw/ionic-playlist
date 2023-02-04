import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonPopover,
  IonToolbar,
} from '@ionic/react';
import React, { useRef, useState } from 'react';
import AboutPopover from '../../components/AboutPopover';

import {
  mailSharp,
  chevronDownSharp,
  chevronForwardSharp,
  arrowBackSharp,
  star,
  starOutline,
  share,
} from 'ionicons/icons';
import './style.scss';

interface SampleBlankBottomNav {}

const SampleBlankBottomNav: React.FC<SampleBlankBottomNav> = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState<MouseEvent>();
  const [location, setLocation] = useState<'madison' | 'austin' | 'chicago' | 'seattle'>('madison');
  const [conferenceDate, setConferenceDate] = useState('2047-05-17T00:00:00-05:00');

  const pageRef = useRef();

  return (
    <IonPage id="sample-blank-bottom-nav-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/schedule"></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => {}}>
              {false ? (
                <IonIcon slot="icon-only" icon={star}></IonIcon>
              ) : (
                <IonIcon slot="icon-only" icon={starOutline}></IonIcon>
              )}
            </IonButton>
            <IonButton onClick={() => {}}>
              <IonIcon slot="icon-only" icon={share}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div style={{}}>SampleBlankBottomNav</div>
      </IonContent>
      <IonPopover isOpen={showPopover} event={popoverEvent} onDidDismiss={() => setShowPopover(false)}>
        <AboutPopover dismiss={() => setShowPopover(false)} />
      </IonPopover>
    </IonPage>
  );
};

export default React.memo(SampleBlankBottomNav);
