import './ExploreContainer.css';
import React from 'react';
import { IonButton, useIonLoading } from '@ionic/react';

import './main.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [present, dismiss] = useIonLoading();

  return (
    <div className="container">
      <div>
        <div>basic</div>
        <div>
          <IonButton
            onClick={() => {
              present({
                message: 'Loading...',
                duration: 3000,
                cssClass: 'custom-loading',
              });
            }}
          >
            Show Loading
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
