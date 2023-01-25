import { IonContent, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage } from '@ionic/react';
import './Home.css';

const ExpandableOptions: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonList>
          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption color="success" expandable>Archive</IonItemOption>
            </IonItemOptions>

            <IonItem>
              <IonLabel>Sliding Item with Expandable Options</IonLabel>
            </IonItem>

            <IonItemOptions side="end">
              <IonItemOption>Favorite</IonItemOption>
              <IonItemOption color="danger" expandable>Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ExpandableOptions;
