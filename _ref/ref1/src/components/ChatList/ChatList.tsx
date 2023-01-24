import { IonAvatar, IonBadge, IonCard, IonCardContent, IonInfiniteScroll, IonInfiniteScrollContent, IonLabel, IonList } from "@ionic/react";
import { useEffect, useState } from "react";

const ChatList: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="container">
      <IonList>
        <IonCard className="mx-0 mt-10 mb-1 h-32" routerLink='./conversation'>
          <IonCardContent className="flex justify-start w-full">
            <IonAvatar slot="start">
              <img
                className="max-w-[51px] w-full"
                alt="Pic-Doctor"
                src="./assets/avatar/dra-maria.jpg"
              />
            </IonAvatar>
            <IonLabel>
              <h2 className="font-bold">Dra. Maria Renata</h2>
              <p>Dipirona de 4 em 4 horas</p>
            </IonLabel>
            <IonBadge className="badge">1</IonBadge>
            <div className="info-div">
              <p>16:40</p>
            </div>
            
          </IonCardContent>
        </IonCard>
        <IonInfiniteScroll
        onIonInfinite={(ev) => {
          generateItems();
          setTimeout(() => ev.target.complete(), 500);
        }}
      >
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonInfiniteScroll>
      </IonList>
    </div>
  );
};

export default ChatList;

