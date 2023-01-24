import { IonButton, useIonAlert } from "@ionic/react";
import { useState } from "react";

const ModalAlert: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");

  return (
    <>
      <IonButton
        onClick={() =>
          presentAlert({
            header: "DESEJA CANCELAR A CONSULTA?",
            buttons: [
              {
                text: "NÃO",
                role: "cancel",
                handler: () => {
                  setHandlerMessage("Alert canceled");
                },
              },
              {
                text: "SIM",
                role: "confirm",
                handler: () => {
                  setHandlerMessage("Alert confirmed");
                },
              },
            ],
            onDidDismiss: (e: CustomEvent) =>
              setRoleMessage(`Dismissed with role: ${e.detail.role}`),
          })
        }
      >
        Click Me
      </IonButton>
      <p>{handlerMessage}</p>
      <p>{roleMessage}</p>
    </>
  );
};

export default ModalAlert;
