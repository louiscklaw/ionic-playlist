import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import ListDoctor from "../../../components/Patient/ListDoctor/ListDoctor";



const FindDoctor: React.FC = () => {
  return (
    <IonPage className="justify-start">
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
          Médicos Cadastrados
        </IonText>

        <ListDoctor />
      </IonContent>
    </IonPage>
  );
};

export default FindDoctor;
