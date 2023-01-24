import React, { useRef, useState } from 'react';
import { RouteComponentProps, withRouter, useLocation } from 'react-router';

import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonToggle,
} from '@ionic/react';
import {
  calendarOutline,
  hammer,
  moonOutline,
  help,
  informationCircleOutline,
  logIn,
  logOut,
  mapOutline,
  peopleOutline,
  person,
  personAdd,
} from 'ionicons/icons';

import { connect } from '../data/connect';
import { setDarkMode } from '../data/user/user.actions';

import './Menu.css';

// bookmark: menu drawer
const routes = {
  appPages: [
    { title: 'Schedule', path: '/tabs/schedule', icon: calendarOutline },
    { title: 'Speakers', path: '/tabs/speakers', icon: peopleOutline },
    { title: 'Map', path: '/tabs/map', icon: mapOutline },
    { title: 'About', path: '/tabs/about', icon: informationCircleOutline },
  ],
  loggedInPages: [
    { title: 'Account', path: '/account', icon: person },
    { title: 'Support', path: '/support', icon: help },
    { title: 'Logout', path: '/logout', icon: logOut },
  ],
  loggedOutPages: [
    { title: 'LoginIonOriginal', path: '/LoginIonOriginal', icon: logIn },
    { title: 'Introduction', path: '/Introduction', icon: logIn },
    { title: 'HotelLogin', path: '/HotelLogin', icon: logIn },
    { title: 'Support', path: '/support', icon: help },
    { title: 'Signup', path: '/signup', icon: personAdd },
  ],
};

interface Pages {
  title: string;
  path: string;
  icon: string;
  routerDirection?: string;
}
interface StateProps {
  darkMode: boolean;
  isAuthenticated: boolean;
  menuEnabled: boolean;
}

interface DispatchProps {
  setDarkMode: typeof setDarkMode;
}

interface MenuProps extends RouteComponentProps, StateProps, DispatchProps {}

const Menu: React.FC<MenuProps> = ({ darkMode, history, isAuthenticated, setDarkMode, menuEnabled }) => {
  const location = useLocation();
  const [disableMenu, setDisableMenu] = useState(!menuEnabled);
  const ionMenuRef = useRef<HTMLIonMenuElement | null>(null);

  // React.useEffect(() => {
  //   if (['/signup', '/login'].indexOf(location.pathname) > -1) {
  //     console.log({ menuEnabled });
  //     // setDisableMenu(true);
  //   } else {
  //     // setDisableMenu(!menuEnabled);
  //   }
  // }, [location]);

  function renderlistItems(list: Pages[]) {
    return list
      .filter(route => !!route.path)
      .map(p => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem
            detail={false}
            routerLink={p.path}
            routerDirection="none"
            className={location.pathname.startsWith(p.path) ? 'selected' : undefined}
          >
            <IonIcon slot="start" icon={p.icon} />
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }

  return (
    <IonMenu ref={ionMenuRef} type="overlay" disabled={!menuEnabled} contentId="main" id="left-menu">
      <IonContent forceOverscroll={false}>
        <IonList lines="none">
          <IonListHeader>Conference</IonListHeader>
          {renderlistItems(routes.appPages)}
        </IonList>
        <IonList lines="none">
          <IonListHeader>Account</IonListHeader>
          {isAuthenticated ? renderlistItems(routes.loggedInPages) : renderlistItems(routes.loggedOutPages)}
          <IonItem>
            <IonIcon slot="start" icon={moonOutline}></IonIcon>
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle checked={darkMode} onClick={() => setDarkMode(!darkMode)} />
          </IonItem>
        </IonList>
        <IonList lines="none">
          <IonListHeader>Tutorial</IonListHeader>
          <IonItem
            button
            onClick={() => {
              history.push('/tutorial');
            }}
          >
            <IonIcon slot="start" icon={hammer} />
            Show Tutorial
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default connect<{}, StateProps, {}>({
  mapStateToProps: state => ({
    darkMode: state.user.darkMode,
    isAuthenticated: state.user.isLoggedin,
    menuEnabled: state.data.menuEnabled,
  }),
  mapDispatchToProps: {
    setDarkMode,
  },
  component: withRouter(Menu),
});
