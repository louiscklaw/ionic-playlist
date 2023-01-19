import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <div>
          <a href="/MediaItems">MediaItems</a>
        </div>
        <div>
          <a href="/ButtonsInItems">ButtonsInItems</a>
        </div>
        <div>
          <a href="/IconsInItems">IconsInItems</a>
        </div>
        <div>
          <a href="/ItemInputs">ItemInputs</a>
        </div>
        <div>
          <a href="/HelperAndErrorText">HelperAndErrorText</a>
        </div>{' '}
        <div>
          <a href="/ItemCounter​">ItemCounter​</a>
        </div>
        <div>
          <a href="/CSSShadowParts">CSSShadowParts</a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
