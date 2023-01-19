import './ExploreContainer.css';
import React from 'react';
import { IonCheckbox, IonItem, IonLabel } from '@ionic/react';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div>
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
          UI Components
        </a>
      </p>

      <div>
        <div>Indeterminate Checkboxes</div>
        <div>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Themed checkbox</IonLabel>
          </IonItem>
        </div>
      </div>

      <div>
        <div>Indeterminate Checkboxes</div>
        <div>
          <IonItem>
            <IonCheckbox slot="start" indeterminate={true}></IonCheckbox>
            <IonLabel>Indeterminate checkbox</IonLabel>
          </IonItem>
        </div>
      </div>
      <div>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>I agree to the terms and conditions</IonLabel>
        </IonItem>
      </div>
    </div>
  );
};

export default ExploreContainer;
