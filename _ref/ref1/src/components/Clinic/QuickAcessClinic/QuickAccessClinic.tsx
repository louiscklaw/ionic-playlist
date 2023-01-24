// interface ContainerProps {
//   name: string;
// }
import {
  calendarClearOutline,
  calendarOutline,
  camera,
  ellipse,
  home,
  logOutOutline,
  personOutline,
  settingsOutline,
  square,
  triangle,
  homeOutline,
  medkitOutline,
  chatbubblesOutline,
} from "ionicons/icons";
import { IonCard, IonCol, IonGrid, IonIcon, IonImg, IonRow, IonText } from "@ionic/react";
import "./style.css";

const QuickAccess: React.FC = () => {
  return (
    <div className="container">
      <h1 className="font-bold text-l pl-3">Acesso Rápido</h1>
      <IonGrid>
        <IonCol >
        <IonText class=" flex justify-center text-black text-xl font-bold">
          Médico
        </IonText>
        <IonCard
            className="bd-20 quickCard"
            routerLink="/register-doctor"
          >
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/medical-equipment.svg"
            ></IonImg>
            <p className="text-center">Cadastrar Médico</p>
          </IonCard>
          <IonCard className="bd-20 quickCard" routerLink="/find-doctor">
            <IonImg
            color="primary"
              className="imgCard mx-auto"
              src="./assets/icon/medic.svg"
            ></IonImg>
            <p className="text-center">Médicos cadastrados</p>
          </IonCard>
         {/*  <IonCard className=" bd-20 quickCard">
            <IonImg
              className="imgCard"
              src="./assets/icon/appointment.svg"
            ></IonImg>
            <p className="text-center ">Consultas do dia</p>
          </IonCard> */}
            <IonCard
            className=" bd-20 quickCard"
            routerLink="historical-clinic"
          >
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/microscope.svg"
            ></IonImg>
            <p className="text-center">Sistema de Teleconsulta</p>
          </IonCard> 
          <IonCard className=" bd-20 quickCard">
            <IonImg
              className="imgCard"
              src="./assets/icon/calendarNumber.svg"
            ></IonImg>
            <p className="text-center">Agenda Médica</p>
          </IonCard>
        </IonCol>
       <IonCol>
       <IonText class=" flex justify-center text-black text-xl font-bold">
          Paciente
        </IonText>
       <IonCard className=" bd-20 " routerLink="/register-patient">
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/user.svg"
            ></IonImg>
            <p className="text-center ">Cadastrar Paciente</p>
          </IonCard>
          <IonCard className="bd-20 quickCard" routerLink="/patient-list">
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/users.svg"
            ></IonImg>
            <p className="text-center ">Pacientes Cadastrados</p>
          </IonCard>
         {/*  <IonCard
            className=" bd-20 quickCard"
            routerLink="historical-clinic"
          >
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/microscope.svg"
            ></IonImg>
            <p className="text-center ">Lançar Exames</p>
          </IonCard> */}
          <IonCard
            className=" bd-20 quickCard"
            routerLink="historical-clinic"
          >
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/historical.svg"
            ></IonImg>
            <p className="text-center ">Consultar Exames</p>
          </IonCard>
       </IonCol>
       
      </IonGrid>
    </div>
  );
};

export default QuickAccess;
