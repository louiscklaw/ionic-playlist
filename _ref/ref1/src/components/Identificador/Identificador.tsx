
import { IonAvatar, IonItem, IonLabel, IonText, IonThumbnail } from '@ionic/react';
import { useEffect, useState } from 'react';
import { getStorage } from '../../services/adminStorage';
import './style.css';

interface User {
  name: string;
  avatar: string;
}

const Identificador: React.FC = () => {
  const [user, setUser] = useState<User>({ name: '', avatar: '' });

  useEffect(() => {
    getStorage('token').then((response) => {
      setUser(response.data.user);
    })
  }, [])
    ;
  
  const renderize = () => {
    if (user.avatar == '' || user.avatar == null) {
      return 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y';
    } else {
      return user.avatar;
    }
  }
  
  return (
    <div >
     <IonItem lines="none" className="mb-2 identificador">
        <IonThumbnail className="pt-3" slot="end">
          <IonAvatar className="border-primary">
            <img
              alt="Silhouette of a person's head"
              src={renderize()}
            />
          </IonAvatar>
        </IonThumbnail>
        <IonLabel>
          <IonText className="font-medium text-lg pl-3">Olá, {user.name}!</IonText>
        </IonLabel>
      </IonItem>
    </div>
  );
};

export default Identificador;
