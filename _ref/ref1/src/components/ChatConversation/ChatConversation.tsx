import { IonCol, IonGrid, IonRow } from '@ionic/react';
import moment from 'moment';
import { ChatConversationProps } from "../../@types/interfaces";
import './ChatConversation.css';


export function ChatConversation(props: ChatConversationProps) {

  const currentUser = 'max';


  return (
  <IonGrid>
    <IonRow>
      {currentUser !== props.user ? 
       <IonCol size="9" className="message other-message">
        {/* <b>{props.user}</b><br></br> */}
        <span>{props.msg}</span>
        <div className="text-right time"> {moment(props.createdAt).format("HH:mm A")}</div>
       </IonCol> :
        <IonCol size="9" offset="3" className="message my-message">
        {/* <b>{props.user}</b><br></br> */}
        <span>{props.msg}</span>
        <div className="text-right time"> {moment(props.createdAt).format("HH:mm A")}</div>
       </IonCol> }
    </IonRow>
  </IonGrid>
  );
};

