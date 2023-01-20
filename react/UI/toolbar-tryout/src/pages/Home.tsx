import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonProgressBar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { IonFooter } from '@ionic/react';
import { IonSegment, IonSegmentButton } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Default Toolbar</IonTitle>
        </IonToolbar>
        <IonToolbar color="primary">
          <IonTitle>Primary Toolbar</IonTitle>
        </IonToolbar>
        <IonToolbar color="secondary">
          <IonTitle>Secondary Toolbar</IonTitle>
        </IonToolbar>
        <IonToolbar color="tertiary">
          <IonTitle>Tertiary Toolbar</IonTitle>
        </IonToolbar>
        <IonToolbar color="success">
          <IonTitle>Success Toolbar</IonTitle>
        </IonToolbar>
        <IonToolbar color="warning">
          <IonTitle>Warning Toolbar</IonTitle>
        </IonToolbar>
        <IonToolbar color="danger">
          <IonTitle>Danger Toolbar</IonTitle>
        </IonToolbar>
        <IonToolbar color="light">
          <IonTitle>Light Toolbar</IonTitle>
        </IonToolbar>
        <IonToolbar color="medium">
          <IonTitle>Medium Toolbar</IonTitle>
        </IonToolbar>
        <IonToolbar color="dark">
          <IonTitle>Dark Toolbar</IonTitle>
        </IonToolbar>
      </IonHeader>

      <div>https://ionicframework.com/docs/api/toolbar</div>

      <IonHeader>
        <IonToolbar>
          <IonSegment value="all">
            <IonSegmentButton value="all">All</IonSegmentButton>
            <IonSegmentButton value="favorites">Favorites</IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Progress Bars in Toolbars</IonTitle>
          <IonProgressBar type="indeterminate"></IonProgressBar>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer Toolbar</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
