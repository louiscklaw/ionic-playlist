import './ExploreContainer.css';
import React from 'react';
import { IonImg } from '@ionic/react';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <div>
        <div>basic</div>
        <div>
          <IonImg
            src="https://docs-demo.ionic.io/assets/madison.jpg"
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></IonImg>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
