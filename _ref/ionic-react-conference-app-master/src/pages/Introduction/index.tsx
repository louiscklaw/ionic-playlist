import { IonButton, IonContent, IonPage, IonText, IonTitle, useIonRouter } from '@ionic/react';
import React from 'react';
import { Button } from '@material-ui/core';

function Introduction() {
  let route = useIonRouter();
  const goHome = (e: React.MouseEvent) => {
    route.push('/tabs/schedule');
  };

  return (
    <>
      <IonPage id="introduction-page">
        <IonContent>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `
          linear-gradient(0deg, rgba(0, 40, 83, 0.9), rgba(0, 40, 83, 0.1)),
          url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              style={{
                color: 'rgba(255,255,255,0.8)',

                width: '100%',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10rem 3rem',
                gap: '3rem',
              }}
            >
              <IonTitle>待進變果沒致友環健問水法代人苦天。</IonTitle>
              <IonText>
                待進變果沒致友環健問水法代人苦天。 業立臺四即文善公作有往，等怕準命小電個。 査今聞光洋後化外財強主職。
              </IonText>
            </div>
            <div
              style={{
                position: 'fixed',
                bottom: '10rem',

                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Button style={{ backgroundColor: 'unset', color: 'white' }} onClick={e => goHome(e)}>
                go ahead
              </Button>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
}

export default Introduction;
