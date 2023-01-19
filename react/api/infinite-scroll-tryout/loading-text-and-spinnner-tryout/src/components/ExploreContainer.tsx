import './ExploreContainer.css';
import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
} from '@ionic/react';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [items, setItems] = useState<string[]>([]);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <div>basic</div>
        <div>
          <IonContent>
            <IonList>
              {items.map((item, index) => (
                <IonItem key={item}>
                  <IonAvatar slot="start">
                    <img
                      src={
                        'https://plus.unsplash.com/premium_photo-1661963955274-275dedea1024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
                      }
                      alt="avatar"
                    />
                  </IonAvatar>
                  <IonLabel>{item}</IonLabel>
                </IonItem>
              ))}
            </IonList>
            <IonInfiniteScroll
              onIonInfinite={ev => {
                generateItems();
                setTimeout(() => ev.target.complete(), 500);
              }}
            >
              <IonInfiniteScrollContent></IonInfiniteScrollContent>
            </IonInfiniteScroll>
          </IonContent>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
