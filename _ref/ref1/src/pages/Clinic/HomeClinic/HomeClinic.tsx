import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonSearchbar,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import { Redirect, Route, useHistory } from "react-router";
import Identificador from "../../../components/Identificador/Identificador";
import QuickAccess from "../../../components/Clinic/QuickAcessClinic/QuickAccessClinic";
import './style.css';
// import logo from "../../../assets/logo.png"

const HomeClinic: React.FC = () => {
  const history = useHistory();
  const router = () => {
    history.replace('/find-doctor');
  }
  return (
    <IonPage>
      <IonContent>
        <IonImg src='./assets/logo.png' className='imgLogoSmall flex items-center mx-auto' />
        <Identificador/> 
        <h1 className="font-bold text-lg pl-8 pb-10">Bem-Vinda!</h1>       
        <IonItem className="mt-0 mb-0" lines="none">
          <QuickAccess />
        </IonItem>        
     </IonContent> 
    </IonPage>
    
  );
};

export default HomeClinic;
