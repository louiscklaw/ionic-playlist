import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonDatetime,
  IonImg,
  IonText,
  IonButton,
  IonCard,
  IonIcon,
  IonList,
  IonSelect,
  IonSelectOption,
  useIonAlert,
  useIonToast,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
} from "@ionic/react";
import { checkmarkOutline } from "ionicons/icons";
import { useState } from "react";
import "./style.css";



const LinkPatient: React.FC = () => {
    const [presentAlert] = useIonAlert();
    const [handlerMessage, setHandlerMessage] = useState("");
    const [roleMessage, setRoleMessage] = useState("");
    const [present] = useIonToast();
    const [date, setDate] = useState("");
  
  
    const presentToast = () => {
      present({
        message: "Vínculo feito com sucesso!",
        duration: 1500,
        position: "top",
        
      });
    };
  
    const alert = () => {
      presentAlert({
        header: "DESEJA VINCULAR O PACIENTE À CLÍNICA SELECIONADA?",
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
        <IonText class=" flex justify-center mt-5 text-black text-xl font-bold">
          Vincular Paciente
        </IonText>

        <IonCard className="flex">
           
            <IonCardHeader>
         
              <IonCardTitle>
                        Maria Renata
                </IonCardTitle>
             
                
                <IonCardSubtitle>
                       888.555.888-29
                </IonCardSubtitle>
                <IonCardSubtitle>
                        Clínica Inovar
                </IonCardSubtitle>
                <IonCardSubtitle>
                Avenida Alameda das Travessas, nº 111, Edifício Bosque do Cerrado, apartamento 2222 - Bairro dos Barris. CEP: 40000-000
                </IonCardSubtitle>
                
            </IonCardHeader>
        </IonCard>

        <IonCard className="bg-white">
          <IonText
            color="tertiary"
            className="font-bold text-lg flex justify-center mt-10"
          >
            <span>ESCOLHA UMA CLÍNICA</span>
          </IonText>

          <div className="mx-auto flex-col mb-10">
            <IonList>
              <div className="clinicSelector">
                <IonSelect
                  interface="action-sheet"
                  placeholder="SELECIONAR"
                  className="placeholder"
                >
                  <IonSelectOption value="CLIVIVE">CLIVIVE</IonSelectOption>
                  <IonSelectOption value="CLIVIVE">CLIVIVE</IonSelectOption>
                  <IonSelectOption value="CLIVIVE">CLIVIVE</IonSelectOption>
                  <IonSelectOption value="CLIVIVE">CLIVIVE</IonSelectOption>
                  <IonSelectOption value="CLIVIVE">CLIVIVE</IonSelectOption>

                  
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
      </IonContent>
    </IonPage>
  );
};

export default LinkPatient;
