// interface ContainerProps {
//   name: string;
// }

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonImg,
  IonLabel,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonThumbnail,
  IonTitle,
} from "@ionic/react";
import "./style.css";

const DashboardAdmin: React.FC = () => {
  return (
    <div className="container">
      <IonGrid>
        <IonCol className="justify-center">
          <IonText class=" flex justify-center text-black text-xl font-bold">
            Médico
          </IonText>
          <IonCard className=" bd-20 buttonCard" routerLink="/register-doctor">
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/medical-equipment.svg"
            ></IonImg>
            <p className="text-center ">Cadastrar Médico</p>
          </IonCard>
          <IonCard className="bd-20 buttonCard" routerLink="/find-doctor">
            <IonImg
              color="primary"
              className="imgCard mx-auto"
              src="./assets/icon/medic.svg"
            ></IonImg>
            <p className="text-center ">Médicos cadastrados</p>
          </IonCard>
        </IonCol>
        <IonCol>
          <IonText class=" flex justify-center text-black text-xl font-bold">
            Paciente
          </IonText>
          <IonCard className=" bd-20 buttonCard" routerLink="/register-patient">
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/user.svg"
            ></IonImg>
            <p className="text-center ">Cadastrar Paciente</p>
          </IonCard>
          <IonCard className=" bd-20 buttonCard" routerLink="/patient-list">
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/users.svg"
            ></IonImg>
            <p className="text-center ">Pacientes Cadastrados</p>
          </IonCard>
        </IonCol>
        <IonCol>
          <IonText class=" flex justify-center text-black text-xl font-bold">
            Clínica
          </IonText>
          <IonCard className=" bd-20 buttonCard" routerLink="/register-clinic">
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/hospital.svg"
            ></IonImg>
            <p className="text-center  ">Cadastrar Clínica</p>
          </IonCard>
          <IonCard className=" bd-20 buttonCard" routerLink="/clinic-list">
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/health.svg"
            ></IonImg>
            <p className="text-center ">Clínicas Cadastradas</p>
          </IonCard>
          <IonCard className=" bd-20 buttonCard" routerLink="historical-clinic">
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

export default DashboardAdmin;
