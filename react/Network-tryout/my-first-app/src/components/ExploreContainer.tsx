import React from 'react'

import './ExploreContainer.css';
import { Network } from '@capacitor/network';

Network.addListener('networkStatusChange', status => {
  console.log('Network status changed', status);
});

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  let [state, setState] = React.useState('')

  const updateStatus = async () => {
    const status = await Network.getStatus();
    setState(JSON.stringify(status))
  }

  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
          UI Components
        </a>

        <div>https://ionicframework.com/docs/native/network</div>

        <div>{state}</div>
        <div><button onClick={e => updateStatus()}>update</button></div>
      </p>
    </div>
  );
};

export default ExploreContainer;
