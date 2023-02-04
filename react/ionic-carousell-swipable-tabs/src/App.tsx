import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenu,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';


import SampleBlank from './pages/SampleBlank';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import MainTabs from './pages/MainTabs';

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

/* Theme variables */
import './theme/variables.css';
import Menu from './components/Menu';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    {/* <IonSplitPane contentId="main"> */}
      {/* <IonMenu type="overlay" disabled={true} contentId="main"> */}
      {/* </IonMenu> */}

      <IonSplitPane when="xs" contentId="main">
        <Menu />



        <IonRouterOutlet>
          <Route path="/tabs" render={() => <MainTabs />} />

          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>

          <Route path="/sample_blank" component={SampleBlank} />



          <Route exact path="/">
            <Redirect to="/tabs/tab1" />
          </Route>


        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
