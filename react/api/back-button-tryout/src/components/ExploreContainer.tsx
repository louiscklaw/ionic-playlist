import './ExploreContainer.css';
import React from 'react';
import { IonItem, IonButton, IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <div>
        <div>CSS Custom Properties</div>
        <div>
          <IonButton>Custom Button</IonButton>
        </div>
      </div>

      <div>
        <div>Theming</div>
        <div>
          <IonButton>Default</IonButton>
          <IonButton color="primary">Primary</IonButton>
          <IonButton color="secondary">Secondary</IonButton>
          <IonButton color="tertiary">Tertiary</IonButton>
          <IonButton color="success">Success</IonButton>
          <IonButton color="warning">Warning</IonButton>
          <IonButton color="danger">Danger</IonButton>
          <IonButton color="light">Light</IonButton>
          <IonButton color="medium">Medium</IonButton>
          <IonButton color="dark">Dark</IonButton>
        </div>
      </div>

      <div>
        <div>Icons</div>
        <div>
          <IonButton>
            <IonIcon slot="start" icon={star}></IonIcon>
            Left Icon
          </IonButton>

          <IonButton>
            Right Icon
            <IonIcon slot="end" icon={star}></IonIcon>
          </IonButton>

          <IonButton>
            <IonIcon slot="icon-only" icon={star}></IonIcon>
          </IonButton>
        </div>
      </div>

      <div>
        <div>Size</div>
        <div>
          <IonButton size="small">Small</IonButton>
          <IonButton size="default">Default</IonButton>
          <IonButton size="large">Large</IonButton>
        </div>
      </div>

      <div>
        <div>Fill</div>
        <div>
          <IonButton>Default</IonButton>
          <IonButton fill="clear">Clear</IonButton>
          <IonButton fill="outline">Outline</IonButton>
          <IonButton fill="solid">Solid</IonButton>
        </div>
      </div>

      <div>
        <div>Shape</div>
        <div>
          <IonButton>Default</IonButton>
          <IonButton shape="round">Round</IonButton>
        </div>
      </div>

      <div>
        <div>Expand</div>
        <div>
          <IonButton expand="block">Block</IonButton>
          <IonButton expand="full">Full</IonButton>
        </div>
      </div>

      <div>
        <div>basic</div>
        <div>
          <IonButton>Default</IonButton>
          <IonButton disabled={true}>Disabled</IonButton>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
