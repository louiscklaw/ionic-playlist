import React from 'react';
import { Toast } from '@capacitor/toast';

import './ExploreContainer.css';

const showHelloToast = async () => {
  return await Toast.show({
    text: 'Hello!',
  });
};

interface ContainerProps {
  name: string;
}

function ExploreContainer({ name }: ContainerProps) {
  React.useEffect(() => {
    (async () => {
      await showHelloToast();
    })();
  });

  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
          UI Components
        </a>

        <button onClick={showHelloToast}>helloworld</button>
      </p>
    </div>
  );
}

export default ExploreContainer;
