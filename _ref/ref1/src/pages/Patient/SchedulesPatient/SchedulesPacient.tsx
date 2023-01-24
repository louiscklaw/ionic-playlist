
import { IonPage } from "@ionic/react";
import DateTime from "../../../components/DateTime/DateTime";
import Identificador from "../../../components/Identificador/Identificador";

import Schedules from "../../../components/SchedulePatient/SchedulePatient";

const SchedulesPacient: React.FC = () => {
  return (
    <IonPage className="justify-start">
      <Identificador />
       <DateTime /> 
      <div>
         <Schedules/>  
       {/*  <div className="container flex flex-col align-center justify-center items-center">

          <IonImg
            className="w-[240px] h-[262px]"
            src="./assets/icon/agenda.svg"
          ></IonImg>
          <div className="flex flex-col text-center" >
            <span className="text-center" color="#ff0000">NÃO HÁ CONSULTAS</span>
            <span className="text-center" color="#f30000">AGENDADAS NO MOMENTO</span>
          </div>
        </div>  */}
      </div>
    </IonPage>
  );
};

export default SchedulesPacient;
