import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Home.css';
import { IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/react';

const BasicUsage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonList>
          <IonItemSliding>
            <IonItem>
              <IonLabel>Sliding Item with End Options</IonLabel>
            </IonItem>

            <IonItemOptions>
              <IonItemOption>Favorite</IonItemOption>
              <IonItemOption color="danger">Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption color="success">Archive</IonItemOption>
            </IonItemOptions>

            <IonItem>
              <IonLabel>Sliding Item with Start Options</IonLabel>
            </IonItem>
          </IonItemSliding>

          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption color="success">Archive</IonItemOption>
            </IonItemOptions>

            <IonItem>
              <IonLabel>Sliding Item with Options on Both Sides</IonLabel>
            </IonItem>

            <IonItemOptions side="end">
              <IonItemOption>Favorite</IonItemOption>
              <IonItemOption color="danger">Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default BasicUsage;
