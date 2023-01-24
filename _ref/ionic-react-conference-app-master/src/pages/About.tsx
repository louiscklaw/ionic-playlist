import React, { useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonDatetime,
  IonSelectOption,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonPopover,
  IonText,
} from '@ionic/react';
import './About.scss';
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import AboutPopover from '../components/AboutPopover';
import { format, parseISO } from 'date-fns';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState<MouseEvent>();
  const [location, setLocation] = useState<'madison' | 'austin' | 'chicago' | 'seattle'>('madison');
  const [conferenceDate, setConferenceDate] = useState('2047-05-17T00:00:00-05:00');

  const selectOptions = {
    header: 'Select a Location',
  };

  const presentPopover = (e: React.MouseEvent) => {
    setPopoverEvent(e.nativeEvent);
    setShowPopover(true);
  };

  function displayDate(date: string, dateFormat: string) {
    return format(parseISO(date), dateFormat);
  }

  return (
    <IonPage id="about-page">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={presentPopover}>
                <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="about-header">
          {/* Instead of loading an image each time the select changes, use opacity to transition them */}
          {/* <div className="about-image madison" style={{ opacity: location === 'madison' ? '1' : undefined }}></div> */}
          {/* <div className="about-image austin" style={{ opacity: location === 'austin' ? '1' : undefined }}></div> */}
          {/* <div className="about-image chicago" style={{ opacity: location === 'chicago' ? '1' : undefined }}></div> */}
          {/* <div className="about-image seattle" style={{ opacity: location === 'seattle' ? '1' : undefined }}></div> */}
          <div
            className="about-image"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1455587734955-081b22074882")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 1,
            }}
          ></div>
        </div>
        <div className="about-info">
          <h3 className="ion-padding-top ion-padding-start">待進變果沒致友環健問水法代人苦天。</h3>

          <p className="ion-padding-start ion-padding-end">
            阪ハウワ応92勤常勉旋72依過らつ。門むば隊就メツヘ突長山テ碁人ゆッ
            歳両ら止都トカハキ締素ぎぜつ索能経初臣こ党求ぼ担効カタハネ文会ヲツレ端作67神フ測相りち挑坂ぶ。
            応ハシカ向2捜せぽけリ覧郷ユヤワサ準助7子群メソマ直林無ノヱク総九るね法
            右み料生レソヱ犯2属スタリチ海新志合のみル。落国がどゅト備初
          </p>

          <h3 className="ion-padding-top ion-padding-start">Details</h3>

          <IonList lines="none">
            <IonItem>
              <IonLabel>Location</IonLabel>
              <IonSelect
                value={location}
                interfaceOptions={selectOptions}
                onIonChange={e => setLocation(e.detail.value as any)}
              >
                <IonSelectOption value="madison">Madison, WI</IonSelectOption>
                <IonSelectOption value="austin">Austin, TX</IonSelectOption>
                <IonSelectOption value="chicago">Chicago, IL</IonSelectOption>
                <IonSelectOption value="seattle">Seattle, WA</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem button={true} id="open-date-input">
              <IonLabel>Date</IonLabel>
              <IonText slot="end">{displayDate(conferenceDate, 'MMM dd, yyyy')}</IonText>
              <IonPopover
                id="date-input-popover"
                trigger="open-date-input"
                showBackdrop={false}
                side="top"
                alignment="end"
              >
                {/* <IonDatetime
                  max="2056"
                  value={conferenceDate}
                  onIonChange={e => setConferenceDate(e.detail.value!)}
                  presentation="date"
                ></IonDatetime> */}
              </IonPopover>
            </IonItem>
          </IonList>

          <h3 className="ion-padding-top ion-padding-start">Internet</h3>

          <IonList lines="none">
            <IonItem>
              <IonLabel>Wifi network</IonLabel>
              <IonLabel className="ion-text-end">ica{displayDate(conferenceDate, 'y')}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Password</IonLabel>
              <IonLabel className="ion-text-end">makegoodthings</IonLabel>
            </IonItem>
          </IonList>
        </div>
      </IonContent>

      <IonPopover isOpen={showPopover} event={popoverEvent} onDidDismiss={() => setShowPopover(false)}>
        <AboutPopover dismiss={() => setShowPopover(false)} />
      </IonPopover>
    </IonPage>
  );
};

export default React.memo(About);
