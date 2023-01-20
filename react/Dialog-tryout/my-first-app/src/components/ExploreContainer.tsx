import React from 'react';
import { Dialog } from '@capacitor/dialog';

import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}


function ExploreContainer({ name }: ContainerProps) {

  const showAlert = async () => {
    await Dialog.alert({
      title: 'Stop',
      message: 'this is an error',
    });
  };

  const showConfirm = async () => {
    const { value } = await Dialog.confirm({
      title: 'Confirm',
      message: `Are you sure you'd like to press the red button?`,
    });

    console.log('Confirmed:', value);
  };

  const showPrompt = async () => {
    const { value, cancelled } = await Dialog.prompt({
      title: 'Hello',
      message: `What's your name?`,
    });

    console.log('Name:', value);
    console.log('Cancelled:', cancelled);
  };


  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
          UI Components
        </a>

        not working

        <div><button onClick={showAlert}>alert</button></div>
        <div><button onClick={showConfirm}>confirm</button></div>
        <div><button onClick={showPrompt}>prompt</button></div>
      </p>
    </div>
  );
};

export default ExploreContainer;
