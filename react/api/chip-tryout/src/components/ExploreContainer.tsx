import './ExploreContainer.css';
import { IonChip } from '@ionic/react';
import { IonAvatar, IonLabel, IonIcon } from '@ionic/react';
import { close, closeCircle, pin } from 'ionicons/icons';
import './main.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
          UI Components
        </a>
        <div>
          <IonChip>Default</IonChip>
          <IonChip disabled={true}>Disabled</IonChip>
          <IonChip outline={true}>Outline</IonChip>
        </div>
        <div>
          <IonChip>
            <IonAvatar>
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </IonAvatar>
            <IonLabel>Avatar Chip</IonLabel>
            <IonIcon icon={closeCircle}></IonIcon>
          </IonChip>

          <IonChip>
            <IonIcon icon={pin} color="primary"></IonIcon>
            <IonLabel>Icon Chip</IonLabel>
            <IonIcon icon={close}></IonIcon>
          </IonChip>
        </div>
        <div>
          <IonChip>Default</IonChip>
          <IonChip color="primary">Primary</IonChip>
          <IonChip color="secondary">Secondary</IonChip>
          <IonChip color="tertiary">Tertiary</IonChip>
          <IonChip color="success">Success</IonChip>
          <IonChip color="warning">Warning</IonChip>
          <IonChip color="danger">Danger</IonChip>
          <IonChip color="light">Light</IonChip>
          <IonChip color="medium">Medium</IonChip>
          <IonChip color="dark">Dark</IonChip>
        </div>
        <div>
          <IonChip>Default</IonChip>
        </div>
      </p>
    </div>
  );
};

export default ExploreContainer;
