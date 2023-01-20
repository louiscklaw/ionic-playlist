import './ExploreContainer.css';
import React from 'react';
import { IonItem, IonLabel, IonThumbnail } from '@ionic/react';

import './main.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <div>
        <div>Theming</div>
        <div>
          <IonThumbnail>
            <img
              alt="Silhouette of mountains"
              src="https://plus.unsplash.com/premium_photo-1661963955274-275dedea1024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            />
          </IonThumbnail>
        </div>
      </div>
      <div>
        <div>Item Thumbnails</div>
        <div>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
            <IonLabel>Item Thumbnail</IonLabel>
          </IonItem>
        </div>
      </div>

      <div>
        <div>basic</div>
        <div>
          <IonThumbnail>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </IonThumbnail>
          <IonThumbnail>
            <img
              alt="Silhouette of mountains"
              src="https://plus.unsplash.com/premium_photo-1661963955274-275dedea1024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            />
          </IonThumbnail>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
