import './ExploreContainer.css';
import React from 'react';
import { IonChip, IonLabel, IonItem, IonAvatar } from '@ionic/react';
import './main.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <div>
        <div>Theming</div>
        <div>
          <IonAvatar>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
        </div>
      </div>

      <div>
        <div>basic</div>
        <div>
          <IonItem>
            <IonAvatar slot="start">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </IonAvatar>
            <IonLabel>Item Avatar</IonLabel>
          </IonItem>
        </div>
      </div>

      <div>
        <div>basic</div>
        <div>
          <IonItem>
            <IonChip>
              <IonAvatar>
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              </IonAvatar>
              <IonLabel>Chip Avatar</IonLabel>
            </IonChip>
          </IonItem>
        </div>
      </div>

      <div>
        <div>basic</div>
        <div>
          <IonAvatar>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
