import React from 'react'

import './ExploreContainer.css';
import { Geolocation } from '@capacitor/geolocation';

interface ContainerProps {
  name: string;
}

function ExploreContainer({ name }: ContainerProps) {
  let [state, setState] = React.useState('')
  React.useEffect(() => {
    (async () => {
      let temp = await Geolocation.getCurrentPosition()
      setState(JSON.stringify(temp, null, 2))
    })()
  })

  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
          UI Components
        </a>
        <div>{state}</div>
      </p>
    </div>
  );
};

export default ExploreContainer;
