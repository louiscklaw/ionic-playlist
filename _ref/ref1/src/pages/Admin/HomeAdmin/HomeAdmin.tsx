import {
  IonButton,
  IonContent,
  IonImg,
  IonItem,
  IonPage,
  IonSearchbar,
} from "@ionic/react";

import { useHistory } from "react-router";
import Clients from "../../../components/Admin/Clients/Clients";
import DashboardAdmin from "../../../components/Admin/DashboardAdmin/DashboardAdmin";
import IdentificadorAdmin from "../../../components/Admin/IdentificadorAdmin/IdentificadorAdmin";
import "./style.css";
// import logo from "../../../assets/logo.png"

const HomeAdmin: React.FC = () => {
  const history = useHistory();
  const router = () => {
    history.replace("/find-doctor");
  };

  return (
    <IonPage>
      <IonContent>
        <IonImg
          src="./assets/logo.png"
          className="imgLogoSmall flex items-center mx-auto"
        />
        <IdentificadorAdmin />
        <h1 className="font-bold text-lg pl-8">Bem-vindo</h1>
        <IonItem className="mt-0 mb-0" lines="none">
          <DashboardAdmin />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default HomeAdmin;
