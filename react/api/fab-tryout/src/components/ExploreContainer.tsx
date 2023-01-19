import './ExploreContainer.css';
import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

import { IonFabList } from '@ionic/react';
import { chevronBack, chevronDown, chevronForward, chevronUp } from 'ionicons/icons';

import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import {
  chevronDownCircle,
  chevronForwardCircle,
  chevronUpCircle,
  colorPalette,
  document,
  globe,
} from 'ionicons/icons';

import './main.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <div>
        <div>CSS Custom Properties​</div>
        <div>
          <IonFab>
            <IonFabButton>
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
            <IonFabList side="end">
              <IonFabButton>
                <IonIcon icon={document}></IonIcon>
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={colorPalette}></IonIcon>
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={globe}></IonIcon>
              </IonFabButton>
            </IonFabList>
          </IonFab>
        </div>
      </div>

      <div>
        <div>Theming</div>
        <div>
          {/* <IonFab slot="fixed" horizontal="center" vertical="center"> */}
          <IonFab slot="fixed">
            <IonFabButton color="secondary">
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
            <IonFabList side="top">
              <IonFabButton color="primary">
                <IonIcon icon={chevronUp}></IonIcon>
              </IonFabButton>
            </IonFabList>
            <IonFabList side="end">
              <IonFabButton color="tertiary">
                <IonIcon icon={chevronForward}></IonIcon>
              </IonFabButton>
              <IonFabButton color="success">
                <IonIcon icon={chevronForward}></IonIcon>
              </IonFabButton>
            </IonFabList>
            <IonFabList side="bottom">
              <IonFabButton color="warning">
                <IonIcon icon={chevronDown}></IonIcon>
              </IonFabButton>
            </IonFabList>
            <IonFabList side="start">
              <IonFabButton color="danger">
                <IonIcon icon={chevronBack}></IonIcon>
              </IonFabButton>
              <IonFabButton color="dark">
                <IonIcon icon={chevronBack}></IonIcon>
              </IonFabButton>
            </IonFabList>
          </IonFab>
        </div>
      </div>

      <div>
        <div>Button Sizing</div>
        <div>
          <IonFab>
            <IonFabButton size="small">
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
            <IonFabList side="end">
              <IonFabButton>
                <IonIcon icon={document}></IonIcon>
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={colorPalette}></IonIcon>
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={globe}></IonIcon>
              </IonFabButton>
            </IonFabList>
          </IonFab>
        </div>
      </div>

      <div>
        <div>Positioning</div>
        <div>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Fab Buttons</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonFab slot="fixed" vertical="top" horizontal="start">
              <IonFabButton>
                <IonIcon icon={chevronForwardCircle}></IonIcon>
              </IonFabButton>
              <IonFabList side="end">
                <IonFabButton>
                  <IonIcon icon={document}></IonIcon>
                </IonFabButton>
                <IonFabButton>
                  <IonIcon icon={colorPalette}></IonIcon>
                </IonFabButton>
                <IonFabButton>
                  <IonIcon icon={globe}></IonIcon>
                </IonFabButton>
              </IonFabList>
            </IonFab>

            <IonFab slot="fixed" vertical="top" horizontal="end" edge={true}>
              <IonFabButton>
                <IonIcon icon={chevronDownCircle}></IonIcon>
              </IonFabButton>
              <IonFabList side="bottom">
                <IonFabButton>
                  <IonIcon icon={document}></IonIcon>
                </IonFabButton>
                <IonFabButton>
                  <IonIcon icon={colorPalette}></IonIcon>
                </IonFabButton>
                <IonFabButton>
                  <IonIcon icon={globe}></IonIcon>
                </IonFabButton>
              </IonFabList>
            </IonFab>

            <IonFab slot="fixed" vertical="bottom" horizontal="end">
              <IonFabButton>
                <IonIcon icon={chevronUpCircle}></IonIcon>
              </IonFabButton>
              <IonFabList side="top">
                <IonFabButton>
                  <IonIcon icon={document}></IonIcon>
                </IonFabButton>
                <IonFabButton>
                  <IonIcon icon={colorPalette}></IonIcon>
                </IonFabButton>
                <IonFabButton>
                  <IonIcon icon={globe}></IonIcon>
                </IonFabButton>
              </IonFabList>
            </IonFab>
          </IonContent>
        </div>
      </div>
      <div>
        <div>List Side​</div>
        <div>
          <IonFab slot="fixed" horizontal="center" vertical="center">
            <IonFabButton>
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
            <IonFabList side="top">
              <IonFabButton>
                <IonIcon icon={chevronUp}></IonIcon>
              </IonFabButton>
            </IonFabList>
            <IonFabList side="end">
              <IonFabButton>
                <IonIcon icon={chevronForward}></IonIcon>
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={chevronForward}></IonIcon>
              </IonFabButton>
            </IonFabList>
            <IonFabList side="bottom">
              <IonFabButton>
                <IonIcon icon={chevronDown}></IonIcon>
              </IonFabButton>
            </IonFabList>
            <IonFabList side="start">
              <IonFabButton>
                <IonIcon icon={chevronBack}></IonIcon>
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={chevronBack}></IonIcon>
              </IonFabButton>
            </IonFabList>
          </IonFab>
        </div>
      </div>
      <div>
        <div>basic</div>
        <div>
          <IonFab>
            <IonFabButton>
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
          </IonFab>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
