import { useState } from "react";
import { IonButton, IonImg, IonInput, IonItem, IonLabel, IonList, IonText } from "@ionic/react";
import ModalAlert from "../ModalAlert/ModalAlert";
import { useHistory } from "react-router";
import { userClinic, userDoctor } from "../../@types/interfaces";
import { registerService } from "../../services/registerService";
import { setStorage } from "../../services/adminStorage";
import { alertaErro, alertaSucesso } from "../../utils/alertas";




const RegisterAdmin: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [crm, setCrm] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConf, setPasswordConf] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [cep, setCep] = useState<string>('');
  const [number, setNumber] = useState<number | string>('');
  const [city, setCity] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [speciality, setSpeciality] = useState<string>("");


  const values: userDoctor= {
    name: name,
    cpf: cpf,
    crm: crm,
    cep: cep,
    address: address,
    number: number,
    city: city,
    district: district,
    state: state,
    email: email,
    password: password,
    confirmPassword: passwordConf,
    speciality: speciality,
    role: "doctor",
    isAdmin: false,
  };



/*   const registerUser = async () => {
    const response = await registerService.registerValues(values);
    const jwt = response.data.id;
    if (jwt) {
      setStorage("jwt", jwt);
      alertaSucesso.alerta("Usuário cadastrado com sucesso !");
      history.replace("/login");
    } else {
      alertaErro.alerta(`${response.data.message}`);
    }
  };
 */

  return (
    <div>
        <IonImg src='./assets/logo.png' className='imgLogoSmall flex items-center mx-auto' />
        <IonText class=" flex justify-center mt-5 text-black text-xl font-bold">
                Registro de Admin
            </IonText>
        <IonList>
            
        <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>Nome</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={name} placeholder="Informe seu nome" onIonChange={e => setName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>CPF</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={cpf} placeholder="Informe seu CPF" onIonChange={e => setCpf(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>E-mail</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="password" value={email} placeholder="Informe e-mail" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>Senha</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="password" value={password} placeholder="Informe senha" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>Confirmar Senha</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="password" value={passwordConf} placeholder="confirme sua senha" onIonChange={e => setPasswordConf(e.detail.value!)}></IonInput>
          </IonItem>
          
          <IonButton className='btnDefault mt-10' expand="block"  /* onClick={registerUser} */>REGISTRE-SE</IonButton>
          
          <div className='my-8'>
            <IonButton fill="clear" className="flex justify-center mx-auto text-xl font-bold" routerLink="/login">
              <p>Voltar para login</p>
            </IonButton>
          </div>
        </IonList> 
        </div>
  );
};

export default RegisterAdmin;