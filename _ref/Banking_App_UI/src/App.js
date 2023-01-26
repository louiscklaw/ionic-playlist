import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home';
import Account from './pages/Account';
import AddCard from './pages/AddCard';

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
import AddTransaction from './pages/AddTransaction';

const App = () => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route path="/" exact={true}>
					<Redirect to="/home" />
				</Route>
				<Route path="/home" exact={true}>
					<Home />
				</Route>
				
				<Route path="/account" exact={ true }>
					<Account />
				</Route>

				<Route path="/account/add-card" exact={ true }>
					<AddCard />
				</Route>

				<Route path="/add-transaction/:card_id" exact={ true }>
					<AddTransaction />
				</Route>
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
);

export default App;
