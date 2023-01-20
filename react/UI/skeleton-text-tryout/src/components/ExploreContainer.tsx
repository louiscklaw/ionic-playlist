import './ExploreContainer.css';
import React, { useState } from 'react';
import {
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSkeletonText,
  IonThumbnail,
} from '@ionic/react';
import { musicalNotes } from 'ionicons/icons';
import './main.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="container">
      <div>
        <div>themeing</div>
        <div>
          {loaded && (
            <IonList>
              <IonListHeader>Albums</IonListHeader>
              <IonItem>
                <IonThumbnail slot="start">
                  <IonIcon style={{ width: '100%', height: '100%' }} icon={musicalNotes}></IonIcon>
                </IonThumbnail>
                <IonLabel>
                  <h3>Abbey Road</h3>
                  <p>The Beatles</p>
                  <p>1969</p>
                </IonLabel>
              </IonItem>
            </IonList>
          )}
          {!loaded && (
            <IonList>
              <IonListHeader>
                <IonSkeletonText animated={true} style={{ width: '80px' }}></IonSkeletonText>
              </IonListHeader>
              <IonItem>
                <IonThumbnail slot="start">
                  <IonSkeletonText animated={true}></IonSkeletonText>
                </IonThumbnail>
                <IonLabel>
                  <h3>
                    <IonSkeletonText animated={true} style={{ width: '80%' }}></IonSkeletonText>
                  </h3>
                  <p>
                    <IonSkeletonText animated={true} style={{ width: '60%' }}></IonSkeletonText>
                  </p>
                  <p>
                    <IonSkeletonText animated={true} style={{ width: '30%' }}></IonSkeletonText>
                  </p>
                </IonLabel>
              </IonItem>
            </IonList>
          )}
          <IonButton onClick={() => setLoaded(!loaded)}>Toggle</IonButton>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
