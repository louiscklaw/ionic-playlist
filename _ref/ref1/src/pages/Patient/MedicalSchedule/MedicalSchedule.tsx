import {
  IonButton,
  IonCard,
  IonDatetime,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
  IonThumbnail,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import {
  checkmarkOutline
} from "ionicons/icons";
import {  useEffect, useState } from "react";
import DateTime from "../../../components/DateTime/DateTime";
import Identificador from "../../../components/Identificador/Identificador";
import Schedules from "../../../components/SchedulePatient/SchedulePatient";
import "./style.css";


const MedicalSchedule: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const [present] = useIonToast();
  const [date, setDate] = useState("");
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");

  useEffect(() => {

   }, []
  )

  const presentToast = () => {
    present({
      message: "Consulta marcada com sucesso!",
      duration: 1500,
      position: "top",
      
    });
  };

  const alert = () => {
    presentAlert({
      header: "DESEJA MARCAR SUA CONSULTA?",
      cssClass: "custom-alert",
      buttons: [
        {
          text: "NÃO",
          role: "cancel",
          cssClass: "alert-button-cancel",
          handler: () => {
            setHandlerMessage("Alert canceled");
          },
        },
        {
          text: "SIM",
          role: "confirm",
          cssClass: "alert-button-confirm",
          handler: () => {
            presentToast();
          },
        },
      ],
      onDidDismiss: (e: CustomEvent) =>
        setRoleMessage(`Dismissed with role: ${e.detail.role}`),
    });
  };

  return (
    <IonPage className="justify-start">
      <Identificador />

      <div>
        <IonItem lines="none">
          <IonThumbnail slot="start">
            <img
              alt="Silhouette of mountains"
              className="rounded-xl"
              src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
            />
          </IonThumbnail>
          <div className="flex flex-col">
            <IonLabel className="text-bold">Dra. Meredithy Grey</IonLabel>
            <IonLabel>Neurologista</IonLabel>
          </div>
        </IonItem>
        <IonItem className="mt-5" lines="none">
          <IonDatetime
            color="black"
            presentation="date"
            min="2022-12-01T00:00:00"
            size="cover"
          >
            <IonText
              color="tertiary"
              className="font-bold text-lg flex justify-center"
              slot="title"
            >
              <span>ESCOLHA UMA DATA</span>
            </IonText>
          </IonDatetime>
        </IonItem>

        <IonCard className="bg-white">
          <IonText
            color="tertiary"
            className="font-bold text-lg flex justify-center mt-10"
          >
            <span>ESCOLHA UM HORÁRIO</span>
          </IonText>

          <div className="mx-auto flex-col mb-10">
            <IonList>
              <div className="hourSelector">
                <IonSelect
                  interface="action-sheet"
                  placeholder="08:00"
                  className="placeholder"
                >
                  <IonSelectOption value="08:00">08:00</IonSelectOption>
                  <IonSelectOption value="08:00">08:00</IonSelectOption>
                  <IonSelectOption value="08:00">08:00</IonSelectOption>
                  <IonSelectOption value="08:00">08:00</IonSelectOption>
                  <IonSelectOption value="08:00">08:00</IonSelectOption>
                </IonSelect>
              </div>
            </IonList>
          </div>
        </IonCard>
        <div className="flex justify-center">
        <IonButton className="text-lg font-bold" color="tertiary" onClick={alert}>
          <IonIcon slot="start" icon={checkmarkOutline}></IonIcon>
          CONFIRMAR
        </IonButton>
        </div>
        
      </div>
    </IonPage>
  );
};

export default MedicalSchedule;
