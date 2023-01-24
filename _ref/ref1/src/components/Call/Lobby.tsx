import React from "react";
import { LobbyProps } from "../../@types/interfaces";
import { IonButton } from '@ionic/react';
import "./styles.css"


const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
}: LobbyProps) => {
  return (
    <div className="lobby-container">
      <div className="extra-border">
        <div className="border-lobby ">
          <div className="img-container">
            <img src="https://avatars.githubusercontent.com/u/97128625?v=4" alt="User Photo Avatar" />
          </div>
        </div>
      </div>
        <form onSubmit={handleSubmit} className="lobby">
      <h2>Entrar na Sala</h2>
      <div className="inputs">
        <label htmlFor="name">Seu nome</label>
        <input
          type="text"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          readOnly={connecting}
          required />
      </div>

      <div className="inputs">
        <label htmlFor="room">Nome da Sala</label>
        <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          readOnly={connecting}
          required />
      </div>

      <IonButton type="submit" disabled={connecting} className="btn">
        {connecting ? "Connecting" : "Entrar"}
      </IonButton>
    </form>
    </div>
    
  );
};

export default Lobby;
