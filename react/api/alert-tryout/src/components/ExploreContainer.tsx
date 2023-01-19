import './ExploreContainer.css';
import { IonButton, useIonAlert } from '@ionic/react';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [presentAlert] = useIonAlert();

  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
          UI Components
        </a>
        <IonButton
          onClick={() =>
            presentAlert({
              header: 'Alert',
              subHeader: 'Important message',
              message: 'This is an alert!',
              buttons: ['OK'],
            })
          }
        >
          Click Me
        </IonButton>
      </p>
    </div>
  );
};

export default ExploreContainer;
