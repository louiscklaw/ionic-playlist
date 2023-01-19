import './ExploreContainer.css';
import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/react';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <div>
        <div>Theming</div>
        <div>
          <IonList>
            <IonItem>
              <IonLabel>Followers</IonLabel>
              <IonBadge color="primary">22k</IonBadge>
            </IonItem>
            <IonItem>
              <IonLabel>Likes</IonLabel>
              <IonBadge color="secondary">118k</IonBadge>
            </IonItem>
            <IonItem>
              <IonLabel>Stars</IonLabel>
              <IonBadge color="tertiary">34k</IonBadge>
            </IonItem>
            <IonItem>
              <IonLabel>Completed</IonLabel>
              <IonBadge color="success">80</IonBadge>
            </IonItem>
            <IonItem>
              <IonLabel>Warnings</IonLabel>
              <IonBadge color="warning">70</IonBadge>
            </IonItem>
            <IonItem>
              <IonLabel>Notifications</IonLabel>
              <IonBadge color="danger">1000</IonBadge>
            </IonItem>
          </IonList>
        </div>
      </div>
      <div>
        <div>ion-badge</div>
        <div>
          <IonList>
            <IonItem>
              <IonBadge slot="start">11</IonBadge>
              <IonLabel>Badge in start slot</IonLabel>
            </IonItem>
            <IonItem>
              <IonBadge slot="end">22</IonBadge>
              <IonLabel>Badge in end slot</IonLabel>
            </IonItem>
          </IonList>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
