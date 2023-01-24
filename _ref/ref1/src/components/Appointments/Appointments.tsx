import {
  IonCard,
  IonCardContent,
  IonSlide,
  IonSlides,
  IonThumbnail,
  useIonAlert,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { getStorage } from "../../services/adminStorage";
import { useHistory } from 'react-router';

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};


const Appointments: React.FC = () => {

  const [category, setCategory] = useState<string>('doctor');
  const history = useHistory();
  const [busy, setBusy] = useState(false);

  // useEffect(() => {
  //   getStorage('dadosLogin').then((response) => {
  //     setCategory(response.accessToken);})
  // }, [])

const renderize = () => {
  if(category === 'pacient') {
    return ( <h1 className="font-bold text-l pl-3">Consultas Agendadas</h1>)
  } else if (category === 'doctor') {
    return ( <h1 className="font-bold text-l pl-3">Próxima Consulta</h1>)
  } else {
    return ( <h1 className="font-bold text-l pl-3">Agendas do dia</h1>)
  }
  }

  const dateNow = new Date();
  const [dateCall, setDateCall] = useState();
  const [presentAlert] = useIonAlert();
  
  const validConsult = () => {
    if (dateCall == dateNow) {
      history.replace("/webchat");
    } else {
      console.log(dateNow);
      setBusy(true);
      alert();
    }
  }

  const alert = () => {
    return presentAlert({
      header: 'Aguarde!',
      subHeader: 'Ainda não está na hora da sua consulta',
      message: 'Você poderá entrar quando faltar 5min pra iniciar!',
      buttons: ['OK'],
    })
  }

  const demonster = () => {
    history.replace("/webchat");
  }

  return (
    <div className="container">
      {renderize()}
      <IonSlides className="h-[10rem]" pager={true} options={slideOpts}>
        <IonSlide>          
          <IonCard className="bd-20 cardDoctor" onClick={() => demonster()}>
            <IonCardContent className="flex">
              
              <IonThumbnail slot="start">
                <img
                  className="imgDoctor max-h-[130%] max-w-[130%]"
                  alt="Pic-Doctor"
                  src="./assets/avatar/Pic-Doctor.png"
                />
              </IonThumbnail>
              <div className="text-neutral-50 text-left ml-8">
                <span>Dra. Maria Renata</span>
                <p>Psicóloga</p>
                <span>Hoje, 14:00</span>
              </div>
            </IonCardContent>
          </IonCard>
        </IonSlide>
        <IonSlide>

          <IonCard className="bd-20 cardDoctor" onClick={() => validConsult()}>
            <IonCardContent className="flex">
              <IonThumbnail slot="start">
                <img
                  className="imgDoctor max-h-[130%] max-w-[130%]"
                  alt="Pic-Doctor"
                  src="./assets/avatar/Pic-Doctor.png"
                />
              </IonThumbnail>
              <div className="text-neutral-50 text-left ml-8">
                <span>Dra. Maria Renata</span>
                <p>Psicóloga</p>
                <span>Hoje, 14:00</span>
              </div>
            </IonCardContent>
          </IonCard>
        </IonSlide>
      </IonSlides>
    </div>
  );
};

export default Appointments;
