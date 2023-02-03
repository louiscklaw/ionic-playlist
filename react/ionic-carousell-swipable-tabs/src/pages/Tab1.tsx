import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  IonAvatar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { SuperTabsContainer, SuperTab, SuperTabs, SuperTabsToolbar, SuperTabButton } from '@ionic-super-tabs/react';
import React, { useRef, useState } from 'react';
import { IonChip, IonSlide, IonSlides, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList } from '@ionic/react';

// core/dist/types/super-tabs-toolbar/super-tabs-toolbar.component.d.ts
const Tab1: React.FC = () => {
  const [segment, setSegment] = useState<string>('default1');
  const [value, setValue] = useState('0');

  const list = ['default1', 'default2', 'default3', 'default4', 'default5', 'default6', 'default7', 'default8'];

  const handleSlideChange = async (event: any) => {
    let index: number = 0;
    await event.target.getActiveIndex().then((value: any) => {
      index = value;
    });
    setSegment(list[index]);
    setValue('' + index);
  };
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
            <IonItemDivider sticky></IonItemDivider>

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
              <IonSegment mode={'md'} scrollable={true} value={segment} style={{paddingBottom:'10px'}}>
                <IonSegmentButton value="default1">
                  <div
                    style={{
                      width: '80px',
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: '5px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: segment == 'default1' ? 'rgba(220,220,220,0.9)' : 'white',
                      borderRadius: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1568901346375-23c9450c58cd")',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(12,12,12,0.8)' }}>勤常勉旋</div>
                  </div>
                </IonSegmentButton>
                <IonSegmentButton value="default2">
                  <div
                    style={{
                      width: '80px',
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: '5px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: segment == 'default2' ? 'rgba(220,220,220,0.9)' : 'white',
                      borderRadius: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1568901346375-23c9450c58cd")',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(12,12,12,0.8)' }}>勤常勉旋</div>
                  </div>
                </IonSegmentButton>

                <IonSegmentButton value="default3">
                  <div
                    style={{
                      width: '80px',
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: '5px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: segment == 'default3' ? 'rgba(220,220,220,0.9)' : 'white',
                      borderRadius: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1568901346375-23c9450c58cd")',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(12,12,12,0.8)' }}>勤常勉旋</div>
                  </div>
                </IonSegmentButton>

                <IonSegmentButton value="default4">
                  <div
                    style={{
                      width: '80px',
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: '5px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: segment == 'default4' ? 'rgba(220,220,220,0.9)' : 'white',
                      borderRadius: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1568901346375-23c9450c58cd")',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(12,12,12,0.8)' }}>勤常勉旋</div>
                  </div>
                </IonSegmentButton>
                <IonSegmentButton value="default5">
                  <div
                    style={{
                      width: '80px',
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: '5px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: segment == 'default5' ? 'rgba(220,220,220,0.9)' : 'white',
                      borderRadius: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1568901346375-23c9450c58cd")',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(12,12,12,0.8)' }}>勤常勉旋</div>
                  </div>
                </IonSegmentButton>
                <IonSegmentButton value="default6">
                  <div
                    style={{
                      width: '80px',
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: '5px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: segment == 'default6' ? 'rgba(220,220,220,0.9)' : 'white',
                      borderRadius: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1568901346375-23c9450c58cd")',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(12,12,12,0.8)' }}>勤常勉旋</div>
                  </div>
                </IonSegmentButton>

                <IonSegmentButton value="default7">
                  <div
                    style={{
                      width: '80px',
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: '5px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: segment == 'default7' ? 'rgba(220,220,220,0.9)' : 'white',
                      borderRadius: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1568901346375-23c9450c58cd")',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(12,12,12,0.8)' }}>勤常勉旋</div>
                  </div>
                </IonSegmentButton>

                <IonSegmentButton value="default8">
                  <div
                    style={{
                      width: '80px',
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: '5px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: segment == 'default8' ? 'rgba(220,220,220,0.9)' : 'white',
                      borderRadius: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1568901346375-23c9450c58cd")',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(12,12,12,0.8)' }}>勤常勉旋</div>
                  </div>
                </IonSegmentButton>
              </IonSegment>
            </IonItemDivider>

            <IonItem>
              <IonSlides pager={true} options={slideOpts} onIonSlideDidChange={e => handleSlideChange(e)} ref={slider}>
                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>1111</IonCard>
                </IonSlide>

                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>2222</IonCard>
                </IonSlide>

                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>3333</IonCard>
                </IonSlide>

                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>4444</IonCard>
                </IonSlide>
                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>5</IonCard>
                </IonSlide>

                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>6</IonCard>
                </IonSlide>

                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>7</IonCard>
                </IonSlide>

                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>8</IonCard>
                </IonSlide>
              </IonSlides>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider sticky>
              <div>
                <div style={{ margin: '10px' }}>
                  <IonLabel>Section B</IonLabel>
                </div>
                <div style={{ margin: '10px' }}></div>
              </div>
            </IonItemDivider>

            <IonItem>
              <IonSlides pager={true} options={slideOpts} onIonSlideDidChange={e => handleSlideChange(e)} ref={slider}>
                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>1111</IonCard>
                </IonSlide>

                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>2222</IonCard>
                </IonSlide>

                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>3333</IonCard>
                </IonSlide>

                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>4444</IonCard>
                </IonSlide>
                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>5</IonCard>
                </IonSlide>

                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>6</IonCard>
                </IonSlide>

                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>7</IonCard>
                </IonSlide>

                <IonSlide style={{ height: '100vh' }}>
                  <IonCard>8</IonCard>
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
