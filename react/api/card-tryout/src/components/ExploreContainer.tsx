import './ExploreContainer.css';
import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import { IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';

import './main.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div>
      <div className="helloworld">
        <div>
          <div>CSS Custom Properties​</div>
          <div>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
              </IonCardContent>
            </IonCard>
          </div>
        </div>

        <div>
          <div>List Card</div>
          <div>
            <IonCard color="primary">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>Card Content</IonCardContent>
            </IonCard>

            <IonCard color="secondary">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>Card Content</IonCardContent>
            </IonCard>

            <IonCard color="tertiary">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>Card Content</IonCardContent>
            </IonCard>

            <IonCard color="success">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>Card Content</IonCardContent>
            </IonCard>

            <IonCard color="warning">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>Card Content</IonCardContent>
            </IonCard>

            <IonCard color="danger">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>Card Content</IonCardContent>
            </IonCard>

            <IonCard color="light">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>Card Content</IonCardContent>
            </IonCard>

            <IonCard color="medium">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>Card Content</IonCardContent>
            </IonCard>

            <IonCard color="dark">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>Card Content</IonCardContent>
            </IonCard>
          </div>
        </div>

        <div>
          <div>List Card</div>
          <div>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonThumbnail slot="start">
                      <img
                        alt="Silhouette of mountains"
                        src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                      />
                    </IonThumbnail>
                    <IonLabel>Item</IonLabel>
                  </IonItem>

                  <IonItem>
                    <IonThumbnail slot="start">
                      <img
                        alt="Silhouette of mountains"
                        src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                      />
                    </IonThumbnail>
                    <IonLabel>Item</IonLabel>
                  </IonItem>

                  <IonItem>
                    <IonThumbnail slot="start">
                      <img
                        alt="Silhouette of mountains"
                        src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                      />
                    </IonThumbnail>
                    <IonLabel>Item</IonLabel>
                  </IonItem>

                  <IonItem lines="none">
                    <IonThumbnail slot="start">
                      <img
                        alt="Silhouette of mountains"
                        src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                      />
                    </IonThumbnail>
                    <IonLabel>Item</IonLabel>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
          </div>
        </div>

        <div>
          <div>Card Buttons</div>
          <div>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
              </IonCardContent>

              <IonButton fill="clear">Action 1</IonButton>
              <IonButton fill="clear">Action 2</IonButton>
            </IonCard>
          </div>
        </div>

        <div>
          <div>Media Cards</div>
          <div>
            <IonCard>
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
              </IonCardContent>
            </IonCard>
          </div>
        </div>

        <div>
          <div>Cards</div>
          <div>
            {' '}
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
