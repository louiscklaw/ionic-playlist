import {
  IonCard,
  IonCardContent,
  IonThumbnail,
  IonButton,
  IonIcon,
  useIonAlert,
  useIonToast,
} from "@ionic/react";

import {  useHistory } from "react-router-dom";
import {
  heartOutline,
  chatbubbleOutline,
  calendarOutline,
  heart,
  createOutline,
  trashOutline,
} from "ionicons/icons";
import { useEffect, useState } from "react";
import { Doctor } from "../../../@types/interfaces";
import { getStorage } from "../../../services/adminStorage";


interface DoctorCardProps {
  props: Doctor;
}

function DoctorCard({ props }: DoctorCardProps) {
  const [change, setChange] = useState<boolean>(false);
  const [_class, setClass] = useState<string>("flex hidden");
  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const iconSucces = "./assets/icon/success.svg";
  const [category, setCategory] = useState<string>("pacient");
  const [favorites, setFavorite] = useState<any[]>([]);
  const [buzy, setBusy] = useState<boolean>(false);
  const [icons, setIcons] = useState(heartOutline);
  const history = useHistory();

  const showChat = () => {
    setChange(!change);
    if (change === true) {
      setClass("flex");
    } else {
      setClass("flex hidden");
    }
  };

  const presentToast = () => {
    present({
      message: "Médico deletado com sucesso!",
      duration: 1500,
      position: "top",
      icon: iconSucces,
    });
  };

  const alert = () => {
    presentAlert({
      header: "DESEJA APAGAR O MÉDICO DO SISTEMA?",
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


  const addFavorites = () => {
    setBusy(true);
    setIcons(heart);
  };

  useEffect(() => {
    getStorage("token").then((response) => {
      const role = response.data.user.role.toLowerCase();
      setCategory(role);
      console.log(role)
    });
  }, []);

  const renderize = () => {
    if (category === "pacient") {
      return (
        <div className="flex flex-row justify-center items-center">
          <div className={_class}>
            <IonButton className="text-xs w-max" onClick={() => parentConversation()}>
              ABRIR CHAT
              <IonIcon slot="start" icon={chatbubbleOutline}></IonIcon>
            </IonButton>
            <IonButton
              className="text-xs"
              color="tertiary"
              onClick={() => parentAgenda()}
            >
              AGENDAR
              <IonIcon slot="start" icon={calendarOutline}></IonIcon>
            </IonButton>
          </div>
        </div>
      );
    } else if (category === "admin") {
      return (
        <div className="flex flex-row justify-center items-center">
          <div className={_class}>
            <IonButton className="text-xs w-max" color="success">
              EDITAR
              <IonIcon slot="start" icon={createOutline}></IonIcon>
            </IonButton>
            <IonButton
              className="text-xs w-max"
              color="success"
              routerLink="/link-doctor"
            >
              VINCULAR
              <IonIcon slot="start" icon={createOutline}></IonIcon>
            </IonButton>
            <IonButton className="text-xs" color="danger" onClick={alert}>
              DELETAR
              <IonIcon slot="start" icon={trashOutline}></IonIcon>
            </IonButton>
          </div>
        </div>
      );
    }
  };

  

  const parentConversation = () => {
    const doctorId: string =  props.id || '';
    history.replace(`/conversation?id=${doctorId}`)
    };
    
    const parentAgenda = () => {
      const doctorId: string =  props.id || '';
      history.replace(`/medical-schedules?id=${doctorId}`)
      };
    
  
  return (
    <div onClick={showChat}>
      <IonCard className="bd-20 cardDoctorWhite">
        <IonCardContent className="flex justify-between">
          <IonThumbnail slot="start">
            <img
              className="imgDoctor max-h-[130%] max-w-[130%] bd-20"
              alt="Pic-Doctor"
              src="./assets/avatar/Pic-Doctor.png"
            />
          </IonThumbnail>
          <div className="flex flex-col gap-1 ml-11">
            <span className="text-black font-bold">{ props.name}</span>
            <p className="font-normal">{ props.doctor?.speciality}</p>
            <p className="font-normal">{ props.crm}</p>
            {/* <span className="font-medium">98 Avaliações</span> */}
          </div>
          <IonButton fill="clear" onClick={() => addFavorites()}>
            <IonIcon
              slot="icon-only"
              className="text-red-900"
              icon={icons}
            ></IonIcon>
          </IonButton>
        </IonCardContent>
        {renderize()}
      </IonCard>
    </div>
  );
}

export default DoctorCard;
