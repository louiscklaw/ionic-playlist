import { IonCard, IonContent, IonHeader, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { SuperTabsContainer, SuperTab, SuperTabs, SuperTabsToolbar, SuperTabButton } from '@ionic-super-tabs/react';
import React, { useRef, useState } from 'react';
import { IonChip, IonSlide,IonSlides,IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList } from '@ionic/react';

// core/dist/types/super-tabs-toolbar/super-tabs-toolbar.component.d.ts
const Tab1: React.FC = () => {
  const [segment, setSegment] = useState<string>('default1');
  const [value, setValue] = useState('0');

  const list =['default1', 'default2','default3','default4','default5','default6','default7','default8']

  const handleSlideChange = async (event: any) => {
    let index: number = 0;
    await event.target.getActiveIndex().then((value: any) => {
      index = value;
    });
    setSegment(list[index]);
    setValue('' + index);
  }
  const slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: false,
    pagination: {
      el: null,
    },
  };
  const slider = useRef<HTMLIonSlidesElement>(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}

        <IonList>
          <IonItemGroup>
            <IonItemDivider sticky>
              <IonLabel>Section A</IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>A1</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>A2</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>A3</IonLabel>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider sticky>
              <IonLabel>Section B</IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>B1</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>B2</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>B3</IonLabel>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider sticky>
              <IonLabel>Section B</IonLabel>
            </IonItemDivider>

            <IonSegment mode={'md'} scrollable={true} value={segment} >
              <IonSegmentButton value="default1">
                <IonChip>Default1</IonChip>
              </IonSegmentButton>
              <IonSegmentButton value="default2">
                <IonLabel>Default2</IonLabel>
              </IonSegmentButton>

              <IonSegmentButton value="default3">
                <IonLabel>Default3</IonLabel>
              </IonSegmentButton>

              <IonSegmentButton value="default4">
                <IonLabel>Default4</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="default5">
                <IonLabel>Default</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="default6">
                <IonLabel>Default2</IonLabel>
              </IonSegmentButton>

              <IonSegmentButton value="default7">
                <IonLabel>Default3</IonLabel>
              </IonSegmentButton>

              <IonSegmentButton value="default8">
                <IonLabel>Default4</IonLabel>
              </IonSegmentButton>

            </IonSegment>
              <IonItem>
                <IonSlides
                  pager={true}
                  options={slideOpts}
                  onIonSlideDidChange={e => handleSlideChange(e)}
                  ref={slider}
                >
                  <IonSlide>
                    <IonCard  >1111
                      </IonCard>
                  </IonSlide>

                  <IonSlide>
                    <IonCard  >2222
                      </IonCard>
                  </IonSlide>

                  <IonSlide>
                    <IonCard  >3333
                      </IonCard>
                  </IonSlide>

                  <IonSlide>
                    <IonCard  >4444
                      </IonCard>
                  </IonSlide>
                  <IonSlide>
                    <IonCard  >5
                      </IonCard>
                  </IonSlide>

                  <IonSlide>
                    <IonCard  >6
                      </IonCard>
                  </IonSlide>

                  <IonSlide>
                    <IonCard  >7
                      </IonCard>
                  </IonSlide>

                  <IonSlide>
                    <IonCard  >8
                      </IonCard>
                  </IonSlide>
                </IonSlides>
              </IonItem>
          </IonItemGroup>


          <IonItemGroup>
            <IonItemDivider sticky>
              <IonLabel>Section B 123321</IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>B1</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>B2</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>B3</IonLabel>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider sticky>
              <IonLabel>Section B 123321</IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>B1</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>B2</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>B3</IonLabel>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider sticky>
              <IonLabel>Section B 123321</IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>B1</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>B2</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>B3</IonLabel>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider sticky>
              <IonLabel>Section B 123321</IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>B1</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>B2</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>B3</IonLabel>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider sticky>
              <IonLabel>Section B 123321</IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>B1</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>B2</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>B3</IonLabel>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider sticky>
              <IonLabel>Section B 123321</IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>B1</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>B2</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>B3</IonLabel>
            </IonItem>
          </IonItemGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
