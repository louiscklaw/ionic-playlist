import { IonImg, IonPage } from '@ionic/react';
import RegisterClinic from '../../components/Register/RegisterClinic';
import RegisterMedic from '../../components/Register/RegisterDoctor';
import RegisterPacient from '../../components/Register/RegisterPatient';



const Register: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const choice = urlParams.get("category");
  console.log(choice);

  
  return (
    <IonPage>
      <div className="container px-8 py-3 font-semibold overflow-y-auto">
        <div className="splash-info"></div>
            <IonImg src='./assets/logo.png' className='imgLogo'/>
            {choice === "clinic" && <RegisterClinic /> }
            {choice === "doctors" && <RegisterMedic /> }
            {choice === "pacient" && <RegisterPacient/> }
      </div>
    </IonPage>
  );
};

export default Register;
