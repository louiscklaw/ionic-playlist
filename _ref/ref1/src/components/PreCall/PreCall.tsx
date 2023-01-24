import {
  IonImg,
} from "@ionic/react";
import { useHistory } from "react-router";



const PreCall: React.FC = () => {
  const history = useHistory();
  const videoChat = () => {
    history.replace('/call')
  }

  return (
    <div className="container" onClick={videoChat}>
        <div>Dra. Márcia</div>
        <span>Conectando...</span>
        <IonImg src="https://i.pinimg.com/564x/9a/35/24/9a3524627dc64fd1e28675ddb6136d3a.jpg"></IonImg>
      </div>
  );
};

export default PreCall;
