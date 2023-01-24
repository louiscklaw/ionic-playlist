import React, { useRef, useState } from 'react';
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonButton,
  IonTitle,
  IonText,
} from '@ionic/react';
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

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { Grid } from '@material-ui/core';

import './MainTabs.css';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

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

function TestButton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', margin: '1rem' }}>
      <TestSvg />
      <IonTitle>helloworld</IonTitle>
    </div>
  );
}

const MainTabs: React.FC<MainTabsProps> = () => {
  let [tabBarSlot, setTabBarSlot] = useState<'bottom' | undefined>(undefined);
  const anchor = 'bottom';

  let [tab1Active, setTab1Active] = useState<boolean>(false);
  let [tab2Active, setTab2Active] = useState<boolean>(false);
  let [tab3Active, setTab3Active] = useState<boolean>(false);
  let [tab4Active, setTab4Active] = useState<boolean>(false);
  let [activeTab, setActiveTab] = useState<number>(-1);

  let test_location = useLocation();
  React.useEffect(() => {
    // console.dir(test_location.pathname);
    let temp = ['/tabs/schedule', '/tabs/speakers', '/tabs/login', '/tabs/map', '/tabs/about'].indexOf(
      test_location.pathname,
    );
    console.dir({ temp });
    setActiveTab(temp);
  }, [test_location?.pathname]);

  const updateTabBarSlot = () => {
    // const test = document.querySelectorAll<HTMLElement>('.middle-menu-button');
    // const menuPlateShown = document.querySelectorAll('.menu-pane-visible').length > 0;
    // if (menuPlateShown) {
    //   setTabBarSlot(undefined);
    //   test[0].style.display = 'none';
    // } else {
    //   setTabBarSlot('bottom');
    //   test[0].style.display = 'flex';
    // }
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

  // React.useEffect(() => {
  //   const menuButtonShown = document.querySelectorAll('.menu-button').length > 0;
  //   const test = document.querySelectorAll<HTMLElement>('.middle-menu-button');

  //   if (menuButtonShown) {
  //     test[0].style.display = 'flex';
  //     console.log('middle shown');
  //   } else {
  //     test[0].style.display = 'none';
  //     console.log('middle hide');
  //   }
  // }, [test_location?.pathname]);

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    console.log({ toggleDrawer: { open, anchor } });
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: 'gold', borderRadius: '1rem 1rem 0 0', height: '100px' }}
    >
      <div>helloworld</div>
    </div>
  );

  function CloseButton({ toggleDrawer }: any) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          margin: '1rem 1rem 0 1rem',
        }}
        onClick={toggleDrawer(anchor, false)}
      >
        <div
          style={{
            width: '66px',
            height: '66px',
            backgroundImage: `url("/assets/close-circle-svgrepo-com.svg")`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <IonText>關閉</IonText>
      </div>
    );
  }

  return (
    <>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        PaperProps={{
          classes: { root: 'helloworld-root' },
        }}
        style={{}}
      >
        <div style={{ borderRadius: '3rem 3rem 0 0', padding: '1rem' }}>
          <Grid container>
            <Grid item xs={12} container justifyContent="center">
              <div style={{ width: '30px', height: '6px', borderRadius: '3px', backgroundColor: 'lightgrey' }}></div>
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <TestButton />
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <TestButton />
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <CloseButton toggleDrawer={toggleDrawer} />
            </Grid>
          </Grid>
        </div>
      </Drawer>

      <div
        id="helloworld-id"
        style={{
          position: 'fixed',
          bottom: '10px',
          left: 'calc( 50% - 50px )',
          height: '100px',
          width: '100px',
          backgroundColor: 'gold',
          zIndex: 999,
        }}
      >
        helloworld
      </div>

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

        <IonTabBar className={'menu-button'} slot={'bottom'}>
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
          <IonTabButton tab="blank" href="/tabs/blank">
            {/* <IonIcon icon={location} /> */}
            {/* <IonLabel>待進變果沒</IonLabel> */}
            <IonTabButtonBody active={activeTab == 2} icon={location} label="blank" />
          </IonTabButton>
          <IonTabButton tab="map" href="/tabs/map">
            {/* <IonIcon icon={location} /> */}
            {/* <IonLabel>待進變果沒</IonLabel> */}
            <IonTabButtonBody active={activeTab == 3} icon={location} label="注文履歴" />
          </IonTabButton>
          <IonTabButton tab="about" href="/tabs/about">
            {/* <IonIcon icon={location} /> */}
            {/* <IonLabel>待進變果沒</IonLabel> */}
            <IonTabButtonBody active={activeTab == 4} icon={informationCircle} label="ホテル" />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>
  );
};

export default MainTabs;
