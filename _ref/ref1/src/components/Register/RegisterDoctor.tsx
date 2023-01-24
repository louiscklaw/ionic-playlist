import { useState } from "react";
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonText } from "@ionic/react";
import ModalAlert from "../ModalAlert/ModalAlert";
import { useHistory } from "react-router";
import { userClinic, userDoctor } from "../../@types/interfaces";
import { registerService } from "../../services/registerService";
import { setStorage } from "../../services/adminStorage";
import { alertaErro, alertaSucesso } from "../../utils/alertas";

import axios from 'axios';



const RegisterDoctor: React.FC = () => {
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
  const role = "doctors";


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
    // confirmPassword: passwordConf,
    speciality: speciality,
    // role: "doctors"
  };

  interface ViaCep  {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string
    }
  
    const api = axios.create({
      // https://h-apigateway.conectagov.estaleiro.serpro.gov.br/oauth2/jwt-token
      baseURL: `https://viacep.com.br/ws/`,
    });
  
    const consultCep = () => {
      if (cep.length == 8) {
        api
      .get<ViaCep>(`${cep}/json/`)
          .then(({ data }: any) => {
            setAddress(data.logradouro);
            setDistrict(data.bairro);
            setState(data.uf);
            console.log(data)
      } )
      .catch((error: any) => console.log('ERRO NA CHAMADA:', error))
      }   
  }


  const registerUser = async () => {
    if (password == passwordConf) {
      await registerService.registerValues(values, role).then((response: any) => {
        console.log(response);
        const jwt = response.data.id;
        if (jwt) {
          setStorage("jwt", jwt);
          setStorage("role", response.data.role);
          setStorage("token", response);
          alertaSucesso.alerta("Usuário cadastrado com sucesso !");
          history.replace("/login");
        } else {
          alertaErro.alerta(`${response.data.message}`);
        }
      }).catch((err: any) => {
        console.log(err)
      });
    } else {
      alertaErro.alerta(`Senhas não Conferem`);
    } 
  };


  return (
    <div>
    <IonText className="flex justify-center mx-auto pb-8 text-lg">Médico</IonText>  
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
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>CRM</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={crm} placeholder="Informe seu CRM" onIonChange={e => setCrm(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>Especialidade</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={speciality} placeholder="Informe sua Especialidade" onIonChange={e => setSpeciality(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>CEP</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={cep} placeholder="Informe seu CEP" onIonChange={e => setCep(e.detail.value!)} onClick={() => consultCep()}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>Endereço</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={address} placeholder="Informe endereço" onIonChange={e => setAddress(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>Número</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={number} placeholder="Informe número ou S/N" onIonChange={e => setNumber(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>Bairro</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={district} placeholder="Informe seu bairro" onIonChange={e => setDistrict(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>Cidade</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={city} placeholder="Informe sua cidade" onIonChange={e => setCity(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>Estado</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={state} placeholder="Informe seu estado" onIonChange={e => setState(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-medium pl-2'>E-mail</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={email} placeholder="Informe e-mail" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
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
          
          <IonButton className='btnDefault mt-10' expand="block"  onClick={registerUser}>REGISTRE-SE</IonButton>
          
          <div className='my-8'>
            <IonButton fill="clear" className="flex justify-center mx-auto text-xs" routerLink="/login">
              <p>Voltar para login</p>
            </IonButton>
          </div>
        </IonList> 
        </div>
  );
};

export default RegisterDoctor;