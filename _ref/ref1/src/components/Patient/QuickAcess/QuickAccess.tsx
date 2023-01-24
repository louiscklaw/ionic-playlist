// interface ContainerProps {
//   name: string;
// }

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonLabel,
  IonRow,
  IonSlide,
  IonSlides,
  IonThumbnail,
  IonTitle,
} from "@ionic/react";
import "./style.css";


const QuickAccess: React.FC = () => {
  return (
    <div className="container">
     <h1 className="font-bold text-l pl-3">Acesso Rápido</h1>
        <IonRow className="flex overflow-x-auto flex-nowrap  mb-0">
          <IonCard className="mr-1 bd-20 quickCard" routerLink="/exam-results">
            <IonImg className="imgCard mx-auto" src="./assets/icon/microscope.svg"></IonImg>
            <p className="text-sm pl-3 ">Resultados de Exames</p>
          </IonCard>
          <IonCard className="mr-1 bd-20 quickCard" routerLink="/schedule-patient">
            <IonImg className="imgCard mx-auto" src="./assets/icon/appointment.svg"></IonImg>
            <p className="text-center ">Minhas consultas</p>
          </IonCard>
          <IonCard className="mr-1 bd-20 quickCard" routerLink="/historical-clinic">
            <IonImg className="imgCard mx-auto" src="./assets/icon/historical.svg"></IonImg>
            <p className="text-center ">Histórico Clínico</p>
          </IonCard>
          {/* <IonCard className="mr-1 bd-20 quickCard">
            <IonImg className="imgCard" src="./assets/icon/chat.svg"></IonImg>
            <p className="text-center ">Chamadas Anteriores</p>
          </IonCard> */}
        </IonRow>
    </div>
  );
};

export default QuickAccess;
