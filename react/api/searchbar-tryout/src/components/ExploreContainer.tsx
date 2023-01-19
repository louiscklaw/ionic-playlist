import './ExploreContainer.css';
import { IonItem, IonSearchbar } from '@ionic/react';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <div>
        <div>Autogrow</div>
        <div>
          <IonSearchbar></IonSearchbar>
          <IonSearchbar placeholder="Custom Placeholder"></IonSearchbar>
          <IonSearchbar disabled={true} placeholder="Disabled"></IonSearchbar>
          <IonSearchbar value="Value"></IonSearchbar>
          <IonSearchbar animated={true} placeholder="Animated"></IonSearchbar>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
