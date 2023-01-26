import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';

const Topic = () => {

  const { topic } = useParams();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonBackButton text="Topics" />
          </IonButtons>

          <IonTitle>{ topic }</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{ topic }</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonLabel>This is the page for the topic: { topic }.</IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Topic;
