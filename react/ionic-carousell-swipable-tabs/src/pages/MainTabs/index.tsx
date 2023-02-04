import {
  IonContent,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { calendar, ellipse, square, triangle } from 'ionicons/icons';
import React, { useRef } from 'react';
import { Route, Redirect } from 'react-router';
import SampleBlankBottomNav from '../SampleBlankBottomNav';
import { useTranslation } from 'react-i18next';

// import AboutPopover from '../../components/AboutPopover';

import './style.scss';
import Tab1 from '../Tab1';

interface AboutProps {}

const MainTabs: React.FC<AboutProps> = () => {
  const { t } = useTranslation();

  const tabBarRef = useRef<HTMLIonTabBarElement>(null);

  return (
    <>
      hello MainTabs
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tabs/sample_blank_bottom_nav" render={() => <SampleBlankBottomNav />} exact={true} />
          <Route path="/tabs/tab1" render={() => <Tab1 />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar ref={tabBarRef} slot={'bottom'}>
          <IonTabButton tab="schedule" href="/tabs/schedule">
            <IonIcon icon={calendar} />
            <IonLabel>{t('Schedule')}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab1" href="/tabs/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>
  );
};

export default React.memo(MainTabs);
