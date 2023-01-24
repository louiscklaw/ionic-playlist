import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
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
import { pencilOutline, trashBinOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { mockedClinics } from "../../../mocks/clinic";

const ClinicList = () => {
  const [items, setItems] = useState<any>(mockedClinics);
  let listClinics = mockedClinics;
  const [results, setResults] = useState([...listClinics]);

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
      listClinics.filter((clinic) => {
        return (
          clinic.name!.toLowerCase().indexOf(query) > -1 ||
          query === "" ||
          clinic.cnpj!.indexOf(query) > -1 ||
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
  const [_class, setClass] = useState<string>("flex hidden");
  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const iconSucces = "./assets/icon/success.svg";

  const presentToast = () => {
    present({
      message: "Clínica deletada com sucesso!",
      duration: 1500,
      position: "top",
      icon: iconSucces
    });
  };

  const alert = () => {
    presentAlert({
      header: "DESEJA APAGAR A CLÍNICA DO SISTEMA?",
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
          Clínicas Cadastradas
        </IonText>
        <IonSearchbar
          debounce={1000}
          placeholder="Pesquisar por Nome ou CNPJ"
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

export default ClinicList;
