import './ExploreContainer.css';
import React from 'react';
import { IonItem, IonLabel, IonList, IonToggle } from '@ionic/react';
import './main.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <div>
        <div>CSS Custom Properties</div>
        <div>
          <IonToggle></IonToggle>
          <IonToggle checked={true}></IonToggle>
        </div>
      </div>

      <div>
        <div>Theming</div>
        <div>
          <IonToggle color="primary" checked={true}></IonToggle>
          <IonToggle color="secondary" checked={true}></IonToggle>
          <IonToggle color="tertiary" checked={true}></IonToggle>
          <IonToggle color="success" checked={true}></IonToggle>
          <IonToggle color="warning" checked={true}></IonToggle>
          <IonToggle color="danger" checked={true}></IonToggle>
          <IonToggle color="light" checked={true}></IonToggle>
          <IonToggle color="medium" checked={true}></IonToggle>
          <IonToggle color="dark" checked={true}></IonToggle>
        </div>
      </div>

      <div>
        <div>labels</div>
        <div>
          <IonToggle enableOnOffLabels={true}></IonToggle>
        </div>
      </div>
      <div>
        <div>basic</div>
        <div>
          <IonList>
            <IonItem>
              <IonLabel>Default Toggle</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Checked Toggle</IonLabel>
              <IonToggle slot="end" checked={true}></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Disabled Toggle</IonLabel>
              <IonToggle slot="end" disabled={true}></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Disabled Checked Toggle</IonLabel>
              <IonToggle slot="end" checked={true} disabled={true}></IonToggle>
            </IonItem>
          </IonList>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
