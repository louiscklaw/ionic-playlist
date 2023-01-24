import { useState } from "react";
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonThumbnail,
  IonToolbar,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import ModalAlert from "../ModalAlert/ModalAlert";
import { chatbubbleOutline } from "ionicons/icons";
import Identificador from "../Identificador/Identificador";

const SchedulePatient: React.FC = () => {
  const [change, setChange] = useState<boolean>(false);
  const [_class, setClass] = useState<string>("flex hidden");
  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const iconSucces = "./assets/icon/success.svg";

  const presentToast = () => {
    present({
      message: "Consulta cancelada com sucesso",
      duration: 1500,
      position: "top",
      icon: iconSucces
    });
  };

  const showChat = () => {
    setChange(!change);
    if (change === true) {
      setClass("flex");
    } else {
      setClass("flex hidden");
    }
  };

  const alert = () => {
    presentAlert({
      header: "DESEJA CANCELAR A CONSULTA?",
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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg
          src="./assets/logo.png"
          className="imgLogoSmall flex items-center mx-auto"
        />
        <IonText class=" flex p-4 text-black text-xl font-bold">
          Suas consultas
        </IonText>
        <div className="container" onClick={showChat}>
          <IonCard className="bd-20 card">
            <IonCardContent className="flex justify-around w-auto">
              <IonThumbnail slot="start">
                <img
                  className="min-w-[80px] min-h-[80px]"
                  alt="Pic-Doctor"
                  src="./assets/avatar/Pic-Doctor.png"
                />
              </IonThumbnail>
              <div className="flex flex-col gap-1 ml-11 font-bold text-black">
                <span>Dra. Maria Renata</span>
                <span>Hoje, 14:00</span>
                <div className="flex">
                  <IonButton
                    className="text-xs"
                    color="secondary"
                    onClick={alert}
                  >
                    CANCELAR
                  </IonButton>
                  <IonButton className="text-xs" color="primary">
                    CONFIRMAR
                  </IonButton>
                </div>
              </div>
            </IonCardContent>

            <div className="flex flex-row justify-center items-center">
              <div className={_class}>
                <IonButton className="text-xs w-max" expand="block">
                  ABRIR CHAT
                  <IonIcon slot="start" icon={chatbubbleOutline}></IonIcon>
                </IonButton>
              </div>
            </div>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SchedulePatient;
