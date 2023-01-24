import  { useEffect, useRef, useState } from 'react';
import { 
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { closeOutline, informationCircleOutline, logOutOutline, notificationsOutline, settingsOutline, shieldCheckmarkOutline } from 'ionicons/icons';
import { removeStorage } from '../../services/adminStorage';
import { useHistory } from 'react-router';

function SideMenu() {
  const history = useHistory();
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const logout = () => {
    removeStorage('nameStorage');
    removeStorage('jwt');
    removeStorage('token');
    removeStorage('role');
    removeStorage('userIdStorage');
    removeStorage('userAdminStorage');
    history.replace("/login");
    window.location.reload();
  }
  
 

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  window.addEventListener('click', function(e: any) {
    if (document.getElementById('element-modal')!.contains(e.target)) {
      dismiss()
    }
});


  return (
    <>
      <IonModal id="element-modal" ref={modal} trigger="open-modal" presentingElement={presentingElement!} className="mb-14">
        <IonHeader>
            <IonToolbar>
              <IonTitle>Minha Conta</IonTitle>
              <IonButtons slot="end">
                <IonButton color="light" onClick={() => dismiss()}>
                  <IonIcon icon={closeOutline} className="text-slate-900"></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonItem href="/patient-settings/">
          <IonIcon icon={settingsOutline} slot="start" ></IonIcon>
          <IonLabel>
            Configurações
          </IonLabel>
        </IonItem> 
        {/* <IonItem>
          <IonIcon icon={notificationsOutline} slot="start"></IonIcon>
          <IonLabel>
            Notificações
          </IonLabel>
        </IonItem> */}
        <IonItem>
          
          <IonIcon icon={informationCircleOutline} slot="start"></IonIcon>
          <a href="https://www.virtumed.com.br/" target="_blank">
          <IonLabel>
            Sobre nós
          </IonLabel>
          </a>
        </IonItem>
        <IonItem href="/privacy/">
          <IonIcon icon={shieldCheckmarkOutline} slot="start"></IonIcon>
          <IonLabel>
            Privacidade e segurança
          </IonLabel>
        </IonItem>
        <IonItem onClick={logout}>
          <IonIcon icon={logOutOutline} slot="start"></IonIcon>
          <IonLabel>
            Logout
          </IonLabel>
        </IonItem>
          </IonContent> 
      </IonModal>
    </>
  );
}
export default SideMenu;