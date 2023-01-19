import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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

import Home from './pages/Home';
import MediaItems from './pages/MediaItems';
import ButtonsInItems from './pages/ButtonsInItems';
import IconsInItems from './pages/IconsInItems';
import ItemInputs from './pages/ItemInputs';
import HelperAndErrorText from './pages/HelperAndErrorText';
import ItemCounter from './pages/ItemCounter';
import CSSShadowParts from './pages/CSSShadowParts';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/MediaItems">
          <MediaItems />
        </Route>
        <Route exact path="/ButtonsInItems">
          <ButtonsInItems />
        </Route>
        <Route exact path="/IconsInItems">
          <IconsInItems />
        </Route>
        <Route exact path="/ItemInputs">
          <ItemInputs />
        </Route>
        <Route exact path="/HelperAndErrorText">
          <HelperAndErrorText />
        </Route>
        <Route exact path="/ItemCounter">
          <ItemCounter />
        </Route>

        <Route exact path="/CSSShadowParts">
          <CSSShadowParts />
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
