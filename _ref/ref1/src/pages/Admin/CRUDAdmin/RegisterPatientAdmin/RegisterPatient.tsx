import { useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router";
import { userPacient } from "../../../../@types/interfaces";
import { setStorage } from "../../../../services/adminStorage";
import { registerService } from "../../../../services/registerService";
import { alertaSucesso, alertaErro } from "../../../../utils/alertas";

const RegisterPatientAdmin: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [rg, setRg] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConf, setPasswordConf] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [number, setNumber] = useState<number | string>("");
  const [city, setCity] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [state, setState] = useState<string>("");

  const values: userPacient = {
    name: name,
    cpf: cpf,
    rg: rg,
    cep: cep,
    address: address,
    number: number,
    city: city,
    district: district,
    state: state,
    email: email,
    password: password,
    confirmPassword: passwordConf,
    role: "doctor",
    isAdmin: false,
  };
/* 
  const registerUser = async () => {
    const response = await registerService.registerValues(values);
    const jwt = response.data.id;
    if (jwt) {
      setStorage("jwt", jwt);
      alertaSucesso.alerta("Paciente registrado com sucesso !");
      history.replace("/home-admin");
    } else {
      alertaErro.alerta(`${response.data.message}`);
    }
  }; */

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonImg
          src="./assets/logo.png"
          className="imgLogoSmall flex items-center mx-auto"
        />
        <IonText class=" flex justify-center mt-5 text-black text-xl font-bold">
          Registrar Paciente
        </IonText>
        <IonList>
          <IonItem lines="inset" className="pr-2">
            <IonText class=" mt-5 text-black text-lg font-medium">
              Dados para acesso
            </IonText>
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">E-mail</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="password"
              value={email}
              placeholder="Informe e-mail"
              onIonChange={(e) => setEmail(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">Senha</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="password"
              value={password}
              placeholder="Informe senha"
              onIonChange={(e) => setPassword(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">
                  Confirmar Senha
                </span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="password"
              value={passwordConf}
              placeholder="confirme sua senha"
              onIonChange={(e) => setPasswordConf(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonText class=" mt-5 text-black text-lg font-medium">
              Dados Pessoais
            </IonText>
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">Nome</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={name}
              placeholder="Informe seu nome"
              onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">CPF</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={cpf}
              placeholder="Informe seu CPF"
              onIonChange={(e) => setCpf(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">RG</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={rg}
              placeholder="Informe seu RG"
              onIonChange={(e) => setRg(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">CEP</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={cep}
              placeholder="Informe seu CEP"
              onIonChange={(e) => setCep(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">Endereço</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={address}
              placeholder="Informe endereço"
              onIonChange={(e) => setAddress(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">Número</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={number}
              placeholder="Informe número ou S/N"
              onIonChange={(e) => setNumber(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">Bairro</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={district}
              placeholder="Informe seu bairro"
              onIonChange={(e) => setDistrict(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">Cidade</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={city}
              placeholder="Informe sua cidade"
              onIonChange={(e) => setCity(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">Estado</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={state}
              placeholder="Informe seu estado"
              onIonChange={(e) => setState(e.detail.value!)}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonButton
          className="btnDefault mt-5 mb-16"
          expand="block"
          /* onClick={registerUser} */
        >
          REGISTRAR
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPatientAdmin;
