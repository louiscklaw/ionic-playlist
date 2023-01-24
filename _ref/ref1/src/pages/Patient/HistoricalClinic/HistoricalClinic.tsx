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
  ellipse,
  heart,
  square,
  triangle,
} from "ionicons/icons";
import Identificador from "../../../components/Identificador/Identificador";


/* criar 3 classes para dividir por cor */

const HistoricalClinic: React.FC = () => {
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
      <div>
        <h1 className="font-medium text-2xl text-black p-5">
          Histórico Clínico
        </h1>
        <IonAccordionGroup multiple={true}>
          
          <IonAccordion toggleIcon={addOutline} toggleIconSlot="end" >
            <IonItem slot="header"  className="clinicalHistory-yellow font-bold" color="red" >
              <IonLabel className="flex flex-row justify-between" >
                <span>Revisão Neurológica</span>
                <span>19/11/2022</span>
              </IonLabel>
            </IonItem>
            <div
              className="ion-padding flex flex-col text-black"
              slot="content"
            >
              <div className="text-white p-5 clinicalHistory-yellow" >
              <strong>Dr Vinícius Oliveira</strong>
                <div className="text-black p-5 bg-white bd-20 mt-5" >
                <p>FNulla interdum et massa vehicula rutrum. Aliquam porta elementum congue. Proin vitae ipsum quis nibh tempus finibus sit amet vel tortor. Nunc feugiat nec purus at volutpat. Phasellus at auctor lectus. Aliquam vulputate vitae tortor ut facilisis. In gravida tristique ultricies. Donec ut eros laoreet, laoreet mauris vel, gravida tellus. Donec at porttitor urna.</p>
              </div>
              </div>
              
            </div>
          </IonAccordion>
          <IonAccordion toggleIcon={addOutline} toggleIconSlot="end" >
            <IonItem slot="header"  className="clinicalHistory-green font-bold" color="red" >
              <IonLabel className="flex flex-row justify-between" >
                <span>Revisão Neurológica</span>
                <span>19/11/2022</span>
              </IonLabel>
            </IonItem>
            <div
              className="ion-padding flex flex-col text-black"
              slot="content"
            >
              <div className="p-5 clinicalHistory-green" >
                <strong>Dr Vinícius Oliveira</strong>
                <div className="text-black p-5 bg-white bd-20 mt-5" >
                <p>FNulla interdum et massa vehicula rutrum. Aliquam porta elementum congue. Proin vitae ipsum quis nibh tempus finibus sit amet vel tortor. Nunc feugiat nec purus at volutpat. Phasellus at auctor lectus. Aliquam vulputate vitae tortor ut facilisis. In gravida tristique ultricies. Donec ut eros laoreet, laoreet mauris vel, gravida tellus. Donec at porttitor urna.</p>
              </div>
              </div>
              
            </div>
          </IonAccordion>
          <IonAccordion toggleIcon={addOutline} toggleIconSlot="end" >
            <IonItem slot="header"  className="clinicalHistory-red font-bold" color="red" >
              <IonLabel className="flex flex-row justify-between" >
                <span>Revisão Neurológica</span>
                <span>19/11/2022</span>
              </IonLabel>
            </IonItem>
            <div
              className="ion-padding flex flex-col text-black"
              slot="content"
            >
              <div className="text-white p-5 clinicalHistory-red" >
              <strong>Dr Vinícius Oliveira</strong>
                <div className="text-black p-5 bg-white bd-20 mt-5" >
                <p>FNulla interdum et massa vehicula rutrum. Aliquam porta elementum congue. Proin vitae ipsum quis nibh tempus finibus sit amet vel tortor. Nunc feugiat nec purus at volutpat. Phasellus at auctor lectus. Aliquam vulputate vitae tortor ut facilisis. In gravida tristique ultricies. Donec ut eros laoreet, laoreet mauris vel, gravida tellus. Donec at porttitor urna.</p>
              </div>
              </div>
              
            </div>
          </IonAccordion>

        
        </IonAccordionGroup>
      </div>
    </IonPage>
  );
};

export default HistoricalClinic;
