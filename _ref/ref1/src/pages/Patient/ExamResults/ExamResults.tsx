import {
  IonAccordion,
  IonAccordionGroup,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  addOutline,
  chevronDown,
  downloadOutline,
  ellipse,
  heart,
  square,
  triangle,
} from "ionicons/icons";
import { useRef, useState } from "react";
import { Redirect, Route } from "react-router";
import DateTime from "../../../components/DateTime/DateTime";
import Identificador from "../../../components/Identificador/Identificador";

const ExamResults: React.FC = () => {
  return (
    <IonPage className="justify-start">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <Identificador />
      <div className="text-black">
        <h1 className="font-medium text-2xl text-black p-5">
          Resultado de exames
        </h1>
        <IonList>
          <IonItem
            slot="header"
            className="font-regular"
            lines="none"
            color=" bg-gray-400"
          >
            <IonLabel className="flex flex-row justify-between ">
              <span>hemograma_completo.pdf</span>
              <div>
                <IonIcon icon={downloadOutline}></IonIcon>
                <span className="ml-2">19/11/2022</span>
              </div>
            </IonLabel>
          </IonItem>
        </IonList>
      </div>
    </IonPage>
  );
};

export default ExamResults;
