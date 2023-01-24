import { useIonToast } from "@ionic/react";

function Toast(message: string) {
  console.log(message);
  const [present] = useIonToast();
    present({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'primary'
    });
  };
  
export default Toast;