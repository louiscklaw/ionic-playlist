import {IonAccordion, IonAccordionGroup, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Accordion } from '../components/Accordion';

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Accordion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Accordion</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Accordion />

        {/* <IonAccordionGroup>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>Languages</IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem>
                <IonLabel>English</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Spanish</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Italian</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>

          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>Languages 2</IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem>
                <IonLabel>English</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Spanish</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Italian</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
        </IonAccordionGroup> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
