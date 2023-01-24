
import { useEffect, useState } from 'react';
import logo from '../../assets/icons/logo.png'
import { userLogin } from '../../@types/interfaces';
import { getStorage, setStorage } from '../../services/adminStorage';
import * as service from '../../services/authService';
import { alertaErro, alertaSucesso } from '../../utils/alertas';
import { IonButton, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonText } from '@ionic/react';
import { useHistory } from "react-router";
// import { useDispatch, useSelector } from 'react-redux';


//import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts'

const Login: React.FC = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();

const values: userLogin = {
  email: email,
  password: password
}

const executeLogin = async () => {
  await service.loginService.login(values)
    .then((response) => {
     console.log(response)
    const jwt = response.data.token;
    const user = response.data.user.id;
    const admin = response.data.user.isAdmin;
    const name = response.data.user.name;
    setStorage('jwt', jwt);
    setStorage('userIdStorage', user);
    setStorage('userAdminStorage', admin);
      setStorage('nameStorage', name);
      setStorage('token', response);
      history.replace("/");
      window.location.reload();
   })
   .catch ((err) => {
    alertaErro.alerta(`Usuario ou Senha Invalidos`);
  })
  }

  const [user, setUser] = useState<any>(null);
     
  useEffect(() => {
    getStorage('token').then((response: any) => {
      setUser(response);
      setEmail(response.data.email);
      setPassword(response.data.password);
    })
  }, [])

  return (
    <IonPage>
      <div className="container px-8 py-3 font-semibold">
        <div className="splash-info"></div>
        <IonList>
          <IonImg src='./assets/logo.png' className='imgLogo flex items-center mx-auto'/>
          <IonItem>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-semibold pl-2 pb-4'>E-mail</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={email} placeholder="Informe usuário" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem className='pb-10'>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-sm font-semibold pl-2 pb-4'>Senha</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="password" value={password} placeholder="Informe senha" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
          
          <IonButton className='btnDefault tracking-normal mt-8' expand="block" onClick={executeLogin}>ENTRAR</IonButton>
          <IonButton className='btnDefault tracking-normal mt-8' expand="block" routerLink="/register-choice">REGISTRE-SE</IonButton>
          
          <div className='my-10'>
            <IonText className="text-center text-sm text-colored font-semibold hover:font-bold">
              <p>Esqueci minha senha</p>
            </IonText>
          </div>

          {/* <IonItem className='bgTransparentCinza lembrar'>
            <IonLabel><IonText>SALVAR USUARIO/SENHA</IonText></IonLabel>
            <IonToggle slot="end" color='selsyn' checked={salvarSenha} onClick={SaveLogin}></IonToggle>
          </IonItem> */}

          

          <div className='mt-[10rem]'>        
            <IonText className="text-center">
            <h6 className='text-[10px]'>Versão 1.0.00</h6>
            </IonText>
          </div>
        </IonList>
      </div>
    </IonPage>
  );
};

export default Login;
