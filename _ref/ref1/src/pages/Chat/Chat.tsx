import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRouterOutlet, IonSearchbar, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import ChatList from '../../components/ChatList/ChatList';
import Identificador from '../../components/Identificador/Identificador';



const Chat: React.FC = () => {

  return (
    <IonPage className="justify-start">
    <Identificador/>
      <IonItem className="mt-0 mb-3">
        <IonSearchbar placeholder="Pesquisar no chat"></IonSearchbar>
      </IonItem>
        <ChatList />
    </IonPage>
  );
};

export default  Chat;
