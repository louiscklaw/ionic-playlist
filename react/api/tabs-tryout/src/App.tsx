import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Theme variables */
import './theme/variables.css';

import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>

          <Route exact path="/tab2">
            <Tab2 />
          </Route>

          <Route path="/tab3">
            <Tab3 />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="schedule" href="/home">
            <IonIcon icon={calendar} aria-hidden="true" />
            <IonLabel>Schedule</IonLabel>
            <IonBadge>6</IonBadge>
          </IonTabButton>

          <IonTabButton tab="speakers" href="/tab1">
            <IonIcon icon={personCircle} aria-hidden="true" />
            <IonLabel>Speakers</IonLabel>
          </IonTabButton>

          <IonTabButton tab="map" href="/tab2">
            <IonIcon icon={map} aria-hidden="true" />
            <IonLabel>Map</IonLabel>
          </IonTabButton>

          <IonTabButton tab="about" href="/tab3/helloworld">
            <IonIcon icon={informationCircle} aria-hidden="true" />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
