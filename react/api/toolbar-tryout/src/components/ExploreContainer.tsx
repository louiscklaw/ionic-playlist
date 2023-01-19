import './ExploreContainer.css';
import React from 'react';
import { IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'ionicons/icons';
import { IonHeader, IonSearchbar } from '@ionic/react';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <div>
        <div>Searchbars in Toolbars</div>
        <div>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Toolbar</IonTitle>
            </IonToolbar>
            <IonToolbar>
              <IonSearchbar></IonSearchbar>
            </IonToolbar>
          </IonHeader>
        </div>
      </div>
      <div>
        <div>Buttons in Toolbars​</div>
        <div>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton>Start</IonButton>
            </IonButtons>
            <IonTitle>Start / End Buttons</IonTitle>
            <IonButtons slot="end">
              <IonButton>End</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonButtons slot="secondary">
              <IonButton>Secondary</IonButton>
            </IonButtons>
            <IonButtons slot="primary">
              <IonButton>Primary</IonButton>
            </IonButtons>
            <IonTitle>Primary / Secondary Buttons</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonButtons slot="secondary">
              <IonButton>
                <IonIcon slot="icon-only" icon={personCircle}></IonIcon>
              </IonButton>
              <IonButton>
                <IonIcon slot="icon-only" icon={search}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonButtons slot="primary">
              <IonButton>
                <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>Icon Buttons</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonButtons slot="secondary">
              <IonButton fill="solid">
                <IonIcon slot="start" icon={personCircle}></IonIcon>
                Contact
              </IonButton>
            </IonButtons>
            <IonButtons slot="primary">
              <IonButton fill="solid">
                Help
                <IonIcon slot="end" icon={helpCircle}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>Solid Buttons</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonButtons slot="secondary">
              <IonButton fill="outline">
                <IonIcon slot="start" icon={star}></IonIcon>
                Star
              </IonButton>
            </IonButtons>
            <IonButtons slot="primary">
              <IonButton fill="outline">
                Edit
                <IonIcon slot="end" icon={create}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>Outline Buttons</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="#"></IonBackButton>
            </IonButtons>
            <IonTitle>Back Button</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton autoHide={false}></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu Button</IonTitle>
          </IonToolbar>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
