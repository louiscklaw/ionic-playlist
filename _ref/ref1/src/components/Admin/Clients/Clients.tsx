import {
    IonList,
    IonSlide,
    IonSlides,
    useIonToast,
  } from "@ionic/react";
  import { useState } from "react";
import { mockedClinics } from "../../../mocks/clinic";
  import { mockedDoctors } from "../../../mocks/doctor";
import ClinicCard from "../ClinicCard/ClinicCard";
  import './style.css';

  
  const Clients: React.FC = () => {
    return (
      <div className="container">
        <div className="titlePopular">
        <h1 className="font-bold text-l pl-3">Clientes</h1>
        <span className="font-bold text-xs text-colored">Ver todos...</span>
        </div>
          <IonSlides pager={true} >
            {mockedClinics.map((element: any) => (
              <IonSlide className="mb-10">
                <ClinicCard clinic={element} key={element.id} />
              </IonSlide>
            ))}
          </IonSlides>
      </div>
    );
  };
  
  export default Clients;
  