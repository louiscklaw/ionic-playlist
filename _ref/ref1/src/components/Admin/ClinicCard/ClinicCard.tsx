import { IonCard, IonCardContent, IonThumbnail, IonImg, IonButton, IonIcon, useIonAlert, useIonToast } from '@ionic/react'
import { heartOutline, chatbubbleOutline, calendarOutline, heart } from 'ionicons/icons'
import React, { useState } from 'react'
import { userClinic } from '../../../@types/interfaces';
import logo from "../../../assets/icon/logo2.svg";



interface ClinicCardProps {
  clinic: userClinic;
}
 
  
function ClinicCard({ clinic }: ClinicCardProps) {
 
  return (
    <div>
      <IonCard className="bd-20 cardDoctorWhite" >
        <IonCardContent className="flex justify-between">
          <IonThumbnail slot="start">
            <img
              className="imgDoctor max-h-[130%] max-w-[130%] bd-20"
              alt="Pic-Doctor"
              src="./assets/avatar/Pic-Doctor.png"
              />
          </IonThumbnail>

          <div className="flex flex-col gap-1 ml-11">
            <span className="text-black font-bold">{clinic.name}</span>
            <p className="font-normal">{clinic.address}</p>
            {/* <span className="font-medium">98 Avaliações</span> */}
          </div>
          <div className='flex justify-center align-middle'>
          <IonImg 
          
        
          src='../../../assets/icon/logo2.svg'></IonImg>
          </div>
        
        </IonCardContent>
        
      </IonCard>
    </div>
  );
}

export default ClinicCard;