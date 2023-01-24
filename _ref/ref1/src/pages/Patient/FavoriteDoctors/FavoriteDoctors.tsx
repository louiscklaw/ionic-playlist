import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonList,
  IonPage
} from "@ionic/react";
import { useState } from "react";
import Identificador from "../../../components/Identificador/Identificador";
import DoctorCard from "../../../components/Patient/DoctorCard/DoctorCard";
import { favoriteDoctors } from "../../../mocks/favoritesDoctor";

const FavoriteDoctors: React.FC = () => {
  const [items, setItems] = useState<any>(favoriteDoctors);
  var listDoctors = favoriteDoctors;

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 5; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  return (
    <IonPage className="justify-start">
      <IonContent >
        <Identificador />
        <h1 className="font-bold text-l pl-8">Médicos Favoritos</h1>

        <IonList>
          {items.map((element: any, index: any) => (
            <IonItem key={index}>
              <DoctorCard props={element} key={element.id} />
            </IonItem>
          ))}
        </IonList>
        <IonInfiniteScroll
          onIonInfinite={(ev) => {
            generateItems();
            setTimeout(() => ev.target.complete(), 5000);
          }}
        >
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default FavoriteDoctors;
