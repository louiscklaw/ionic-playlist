import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
// import './Home.css';
// import './main.css';
import React from 'react';
import { IonSlides, IonSlide } from '@ionic/react';
import Slide3 from './Slide3';
import Slide2 from './Slide2';
import Slide1 from './Slide1';
import Slide4 from './Slide4';

const slideOpts = {
  initialSlide: 0,
  speed: 300,
};

const config = { showSkip: true };

const Home: React.FC = () => {
  let ionSliderRef: any = React.useRef();
  let skipRef: any = React.useRef();

  // React.useEffect(() => {
  //   function visitLastSlide() {
  //     skipRef.current.style.display = 'none';
  //   }

  //   if (ionSliderRef?.current) {
  //     ionSliderRef.current.addEventListener('ionSlideReachEnd', visitLastSlide);
  //   }

  //   return () => {
  //     ionSliderRef.current.removeEventListener('ionSlideReachEnd', visitLastSlide, true);
  //   };
  // }, [ionSliderRef?.current]);

  type getIndexType = (event: Event | null) => {
    // type
  };
  const getIndex: getIndexType = async event => {
    if (event !== null) {
      let index: number = 0;
      const slider = event.target as HTMLIonSlidesElement;
      index = await slider.getActiveIndex();
      // setCurrentPage(index);
      console.dir({ index: index, isEnd: slider.isEnd() });
      if ((await slider.isEnd()) == true) {
        skipRef.current.style.display = 'none';
      }
    }
  };

  return (
    <IonContent>
      <div
        style={{
          position: 'fixed',
          zIndex: 9999,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          height: '30px',
        }}
      >
        <div style={{ flexGrow: 1 }}>{}</div>
        <div>
          <IonButton ref={skipRef} className="skip_button" href="/home">
            skip
          </IonButton>
        </div>
      </div>

      <IonSlides
        pager={true}
        options={slideOpts}
        onIonSlideReachEnd={() => {
          skipRef.current.style.display = 'none';
        }}
        onIonSlideDidChange={(e: Event | null) => getIndex(e)}
        ref={ionSliderRef}
      >
        <IonSlide>
          <Slide1 />
        </IonSlide>
        <IonSlide>
          <Slide2 />
        </IonSlide>
        <IonSlide>
          <Slide3 />
        </IonSlide>
        <IonSlide>
          <Slide4 />
        </IonSlide>
      </IonSlides>
    </IonContent>
  );
};

export default Home;
