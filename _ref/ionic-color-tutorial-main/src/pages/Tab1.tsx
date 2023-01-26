import { IonBadge, IonButton, IonCheckbox, IonContent, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonRadio, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton color="alans-color">
          Button
        </IonButton>

        <IonItem>
          <IonLabel>Toggle</IonLabel>
          <IonToggle color="alans-color" />
        </IonItem>

        <IonItem>
          <IonLabel>Checkbox</IonLabel>
          <IonCheckbox color="alans-color" />
        </IonItem>

        <IonItem>
          <IonLabel>Badge</IonLabel>
          <IonBadge color="alans-color">14 notifications</IonBadge>
        </IonItem>

        <IonItem>
          <IonLabel>Note</IonLabel>
          <IonNote color="alans-color">3 unread</IonNote>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
