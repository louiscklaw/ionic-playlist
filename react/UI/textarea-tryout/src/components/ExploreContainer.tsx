import './ExploreContainer.css';
import React from 'react';
import { IonItem, IonLabel, IonList, IonTextarea } from '@ionic/react';
import './main.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div>
      <div>ion-textarea</div>

      <div>
        <div>Theming</div>
        <div>
          <IonItem>
            <IonTextarea className="custom-textarea" placeholder="Type something here"></IonTextarea>
          </IonItem>
        </div>
      </div>

      <div>
        <div>Autogrow</div>
        <div>
          <IonTextarea
            placeholder="Enter text, leave the textarea, come back, and type to clear"
            clearOnEdit={true}
          ></IonTextarea>
        </div>
      </div>

      <div>
        <div>Autogrow</div>
        <div>
          <IonItem>
            <IonTextarea
              placeholder="Type something here"
              autoGrow={true}
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus sem, auctor accumsan egestas sed, venenatis at ex. Nam consequat ex odio, suscipit rhoncus orci dictum eget. Aenean sit amet ligula varius felis facilisis lacinia nec volutpat nulla. Duis ullamcorper sit amet turpis sed blandit. Integer pretium massa eu faucibus interdum."
            ></IonTextarea>
          </IonItem>
        </div>
      </div>

      <div>
        <div>basic</div>
        <div>
          <IonList>
            <IonItem>
              <IonLabel>Regular textarea</IonLabel>
              <IonTextarea placeholder="Type something here"></IonTextarea>
            </IonItem>
            <IonItem>
              <IonLabel>Readonly textarea</IonLabel>
              <IonTextarea readonly={true} placeholder="Can't edit this"></IonTextarea>
            </IonItem>
            <IonItem>
              <IonLabel>Disabled textarea</IonLabel>
              <IonTextarea disabled={true} placeholder="Can't type here"></IonTextarea>
            </IonItem>
          </IonList>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
