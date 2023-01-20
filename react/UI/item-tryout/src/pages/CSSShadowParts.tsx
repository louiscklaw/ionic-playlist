import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <div className="CSSShadowParts">
        <IonItem button detail lines="full">
          <IonLabel>Custom Item</IonLabel>
        </IonItem>

        <IonItem button detail lines="full">
          <IonLabel>Custom Item</IonLabel>
        </IonItem>

        <IonItem button detail lines="full">
          <IonLabel>Custom Item</IonLabel>
        </IonItem>
      </div>

      <div>
        <a href="/home">home</a>
      </div>
    </>
  );
}
export default Example;
