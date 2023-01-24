import {
  IonButton,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonText,
} from "@ionic/react";
import { useState } from "react";

const CategoryChoice: React.FC = () => {

  const [choice, setChoice] = useState('');
  const paramDate = (choice: any) => {
    return `/register?category=${choice}`
   }

  return (
    <IonPage>
        <div className="splash-info"></div>
        <IonImg src="./assets/logo.png" className='imgLogo flex items-center mx-auto pt-0 mb-2' />
          <h1 className="font-semibold text-base pl-8 py-0">Escolha uma opção:</h1>
          <IonList>
            <IonRadioGroup allowEmptySelection={true} value="">
              <IonItem lines="none">
                <IonLabel>Clínica</IonLabel>
                <IonRadio slot="start" value="clinica" onClick={() => setChoice('clinic')}></IonRadio>
              </IonItem>

              <IonItem lines="none">
                <IonLabel>Médico</IonLabel>
                <IonRadio slot="start" value="doctor" onClick={() => setChoice('doctors')}></IonRadio>
              </IonItem>

              <IonItem lines="none">
                <IonLabel>Paciente</IonLabel>
                <IonRadio slot="start" value="pacient" onClick={() => setChoice('pacient')}></IonRadio>
              </IonItem>
            </IonRadioGroup>
          </IonList>
          <IonButton className='btnDefault tracking-normal mt-8 mx-8' routerLink={paramDate(choice)}>CONTINUAR</IonButton>
          <div className="my-10">
            <IonButton
              fill="clear"
              className="text-center text-xs font-semibold"
              routerLink="/login"
            >
              <p>Voltar para login</p>
            </IonButton>
          </div>
    </IonPage>
  );
};

export default CategoryChoice;
