import * as React from 'react'
import './ExploreContainer.css';

import { Device } from '@capacitor/device';

interface ContainerProps {
  name: string;
}

function Helloworld() {
  let [info_state, setInfoState] = React.useState('hi')
  let [id_state, setIdState] = React.useState('hi')
  let [battery_info, setBatteryInfo] = React.useState('hi')
  let [language_code, setLanguageCode] = React.useState('hi')
  let [lauguage_tag, setLanguageTag] = React.useState('hi')

  React.useEffect(() => {
    (async () => {
      setInfoState(JSON.stringify(await Device.getInfo(), null, 2))
      setIdState(JSON.stringify(await Device.getId(), null, 2))
      setBatteryInfo(JSON.stringify(await Device.getBatteryInfo(), null, 2))
      setLanguageCode(JSON.stringify(await Device.getLanguageCode(), null, 2))
      setLanguageTag(JSON.stringify(await Device.getLanguageTag(), null, 2))

    })();
  })

  return (
    <>
      <div>id_state</div>
      <pre>{id_state}</pre>

      <div>info_state</div>
      <pre>{info_state}</pre>

      <div>battery_info</div>
      <pre>{battery_info}</pre>

      <div>language_code</div>
      <pre>{language_code}</pre>

      <div>lauguage_tag</div>
      <pre>{lauguage_tag}</pre>

    </>
  )
}

const ExploreContainer: React.FC<ContainerProps> = () => {

  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
          UI Components 123321
        </a>
      </p>
      <Helloworld />
    </div>
  );
};

export default ExploreContainer;
