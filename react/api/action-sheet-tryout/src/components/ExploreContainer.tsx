import React, { useState } from 'react';
import { IonButton, useIonActionSheet } from '@ionic/react';
import type { OverlayEventDetail } from '@ionic/core';

import './ExploreContainer.css';
import './main.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [present] = useIonActionSheet();
  const [result, setResult] = useState<OverlayEventDetail>();

  return (
    <div className="container">
      <div>
        <div>basic</div>
        <div>
          <div className="container">
            <IonButton
              onClick={() =>
                present({
                  header: 'Example header',
                  subHeader: 'Example subheader',
                  buttons: [
                    {
                      text: 'Delete',
                      role: 'destructive',
                      data: { action: 'delete' },
                    },
                    {
                      text: 'Share',
                      data: { action: 'share' },
                    },
                    {
                      text: 'Cancel',
                      role: 'cancel',
                      data: { action: 'cancel' },
                    },
                  ],
                  onDidDismiss: ({ detail }) => setResult(detail),
                })
              }
            >
              Open
            </IonButton>
            {result && <code>{JSON.stringify(result, null, 2)}</code>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
