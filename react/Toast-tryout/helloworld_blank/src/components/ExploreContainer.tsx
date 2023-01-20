import './ExploreContainer.css';
import { Toast } from '@capacitor/toast';

interface ContainerProps {}

const showHelloToast = async () => {
  await Toast.show({
    text: 'Hello!',
    position: 'top',
  });
};

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
          UI Components
        </a>
      </p>
      <button onClick={e => showHelloToast()}>button to show toast</button>
    </div>
  );
};

export default ExploreContainer;
