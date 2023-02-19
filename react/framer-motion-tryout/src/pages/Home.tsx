import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { motion } from 'framer-motion';

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
            <IonTitle size="large">Blank 123321</IonTitle>
          </IonToolbar>
        </IonHeader>
        <motion.div className="box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
        123231
      </IonContent>
    </IonPage>
  );
};

export default Home;
