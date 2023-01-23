import React, { useRef, useState } from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { Route, Redirect, useLocation } from 'react-router';
import { calendar, location, informationCircle, people } from 'ionicons/icons';
import SchedulePage from './SchedulePage';
import SpeakerList from './SpeakerList';
import SpeakerDetail from './SpeakerDetail';
import SessionDetail from './SessionDetail';
import MapView from './MapView';
import About from './About';
import TestSvg from '../components/TestSvg';
import BottomDrawer from '../components/BottomDrawer';

interface MainTabsProps {}

const IonTabButtonBody = ({ active, icon, label }: { active: boolean; icon: string; label: string }) => {
  return (
    <>
      <div style={{ height: '100%' }}>
        <div
          style={{
            height: '2px',
            width: '100%',
            minWidth: '15vw',
            backgroundColor: active ? 'black' : '',
            borderRadius: '0 0 10px 10px',
          }}
        ></div>
        <div style={{ height: 'calc(100% - 5px )' }}>
          <div style={{ height: '50%' }}>
            <IonIcon icon={icon} style={{ width: '100%', height: '100%' }} />
          </div>
          <IonLabel>{label}</IonLabel>
        </div>
      </div>
    </>
  );
};

const MainTabs: React.FC<MainTabsProps> = () => {
  let [tabBarSlot, setTabBarSlot] = useState<'bottom' | undefined>(undefined);

  let [tab1Active, setTab1Active] = useState<boolean>(false);
  let [tab2Active, setTab2Active] = useState<boolean>(false);
  let [tab3Active, setTab3Active] = useState<boolean>(false);
  let [tab4Active, setTab4Active] = useState<boolean>(false);
  let [activeTab, setActiveTab] = useState<number>(-1);

  let test_location = useLocation();
  React.useEffect(() => {
    // console.dir(test_location.pathname);
    let temp = ['/tabs/schedule', '/tabs/speakers', '/tabs/map', '/tabs/about'].indexOf(test_location.pathname);
    console.dir({ temp });
    setActiveTab(temp);
  }, [test_location?.pathname]);

  const updateTabBarSlot = () => {
    if (document.querySelectorAll('.menu-pane-visible').length > 0) {
      setTabBarSlot(undefined);
    } else {
      setTabBarSlot('bottom');
    }
  };

  React.useEffect(() => {
    // initial run on window open
    setTimeout(() => {
      updateTabBarSlot();
    }, 1);

    // attach on window resize
    window.addEventListener('resize', updateTabBarSlot);
    return () => {
      // remove on window closed
      window.removeEventListener('resize', updateTabBarSlot);
    };
  }, []);

  return (
    <>
      <BottomDrawer />

      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/tabs" to="/tabs/schedule" />
          {/*
            Using the render method prop cuts down the number of renders your components will have due to route changes.
            Use the component prop when your component depends on the RouterComponentProps passed in automatically.
          */}
          <Route path="/tabs/schedule" render={() => <SchedulePage />} exact={true} />
          <Route path="/tabs/speakers" render={() => <SpeakerList />} exact={true} />
          <Route path="/tabs/speakers/:id" component={SpeakerDetail} exact={true} />
          <Route path="/tabs/schedule/:id" component={SessionDetail} />
          <Route path="/tabs/speakers/sessions/:id" component={SessionDetail} />
          <Route path="/tabs/map" render={() => <MapView />} exact={true} />
          <Route path="/tabs/about" render={() => <About />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot={tabBarSlot}>
          <IonTabButton tab="schedule" href="/tabs/schedule">
            {/* <IonIcon icon={calendar} /> */}
            {/* <IonLabel>待進變果沒</IonLabel> */}
            <IonTabButtonBody active={activeTab == 0} icon={calendar} label="メニュー" />
          </IonTabButton>
          <IonTabButton tab="speakers" href="/tabs/speakers">
            {/* <IonIcon icon={people} /> */}
            {/* <IonLabel>待進變果沒</IonLabel> */}
            <IonTabButtonBody active={activeTab == 1} icon={people} label="注文" />
          </IonTabButton>
          <IonTabButton disabled style={{}} tab="speakers" href="/tabs/speakers"></IonTabButton>
          <IonTabButton tab="map" href="/tabs/map">
            {/* <IonIcon icon={location} /> */}
            {/* <IonLabel>待進變果沒</IonLabel> */}
            <IonTabButtonBody active={activeTab == 2} icon={location} label="注文履歴" />
          </IonTabButton>
          <IonTabButton tab="about" href="/tabs/about">
            {/* <IonIcon icon={location} /> */}
            {/* <IonLabel>待進變果沒</IonLabel> */}
            <IonTabButtonBody active={activeTab == 3} icon={informationCircle} label="ホテル" />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

      <div
        style={{
          position: 'fixed',
          bottom: '10px',
          left: 'calc( 50vw - 66px / 2 )',
          height: '66px',
          width: '66px',
          backgroundColor: 'tomato',
          borderRadius: '33px',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          zIndex: 999,

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={e => console.dir('hello world')}
      >
        <TestSvg />
      </div>
    </>
  );
};

export default MainTabs;
