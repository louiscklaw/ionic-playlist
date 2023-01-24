import {
  IonCard,
  IonCardContent,
  IonThumbnail,
  useIonToast,
} from "@ionic/react";
import { useState } from "react";
import { Pacient } from "../../../@types/interfaces";

interface PacientCardProps {
  pacient: Pacient;
}

function PacientCard({ pacient }: PacientCardProps) {
  const [change, setChange] = useState<boolean>(false);
  const [_class, setClass] = useState<string>("flex hidden");
  const [present] = useIonToast();

  const showChat = () => {
    setChange(!change);
    if (change === true) {
      setClass("flex");
    } else {
      setClass("flex hidden");
    }
  };

  return (
    <div onClick={showChat}>
      <IonCard className="bd-20 cardpacientWhite">
        <IonCardContent className="flex justify-start">
          <IonThumbnail slot="start">
            <img
              className="imgpacient max-h-[130%] max-w-[130%] bd-20"
              alt="Pic-pacient"
              src="./assets/avatar/Pic-pacient.jpg"
            />
          </IonThumbnail>

          <div className="flex flex-col gap-1 ml-11">
            <span className="text-black font-bold">{pacient.name}</span>
            {/* <span className="font-medium">98 Avaliações</span> */}
          </div>
        </IonCardContent>
      </IonCard>
    </div>
  );
}

export default PacientCard;
