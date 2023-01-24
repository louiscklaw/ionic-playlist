import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonText,
  IonToolbar,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import {
  list,
  pencilOutline,
  star,
  trashBin,
  trashBinOutline,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { userPacient } from "../../../@types/interfaces";
import { mockedPatients } from "../../../mocks/patient";

const PatientList = () => {
  const [items, setItems] = useState<any>(mockedPatients);
  let listPatients = mockedPatients;
  const [results, setResults] = useState([...listPatients]);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 5; i++) {
      newItems.push(`Item ${1 + items.lenght + i}`);
    }
    setItems([...items, ...newItems]);
  };

  const handleChange = (ev?: Event) => {
    let query = "";
    if (ev != null) {
      const target = ev.target as HTMLIonSearchbarElement;
      if (target) query = target.value!.toLowerCase();
    }
    setResults(
      listPatients.filter((patient) => {
        return (
          patient.name!.toLowerCase().indexOf(query) > -1 ||
          query === "" ||
          patient.cpf!.indexOf(query) > -1 ||
          query === ""
        );
      })
    );
  };

  useEffect(() => {
    generateItems();
    handleChange();
  }, []);

  const [change, setChange] = useState<boolean>(false);
  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const iconSucces = "./assets/icon/success.svg";

  const presentToast = () => {
    present({
      message: "Paciente deletado com sucesso!",
      duration: 1500,
      position: "top",
      icon: iconSucces
    });
  };

  const alert = () => {
    presentAlert({
      header: "DESEJA APAGAR O PACIENTE DO SISTEMA?",
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

  const renderize = () => {
    return results.map((element: any, index: any) => (
      <IonItem lines="full" key={index}>
        <IonLabel>{element.name}</IonLabel>
        <IonButton slot="end" color="primary">
          <IonIcon icon={pencilOutline}></IonIcon>
        </IonButton>
        <IonButton slot="end" color="danger" onClick={alert}>
          <IonIcon icon={trashBinOutline}></IonIcon>
        </IonButton>
      </IonItem>
    ));
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
        <IonText class=" flex justify-start p-3 text-black text-lg font-bold">
          Pacientes Cadastrados
        </IonText>
        <IonSearchbar
          debounce={1000}
          placeholder="Pesquise por Nome ou CPF"
          onIonChange={(ev) => handleChange(ev)}
        ></IonSearchbar>
        <IonItem color="primary" lines="none">
          <IonLabel>Nome</IonLabel>
        </IonItem>
        <IonList>{renderize()}</IonList>
      </IonContent>
    </IonPage>
  );
};

export default PatientList;
