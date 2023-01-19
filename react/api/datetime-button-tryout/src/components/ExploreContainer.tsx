import './ExploreContainer.css';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{' '}
        <div>
          <IonDatetimeButton datetime="datetime"></IonDatetimeButton>

          <IonModal keepContentsMounted={true}>
            <IonDatetime id="datetime"></IonDatetime>
          </IonModal>
        </div>
      </p>
    </div>
  );
};

export default ExploreContainer;
