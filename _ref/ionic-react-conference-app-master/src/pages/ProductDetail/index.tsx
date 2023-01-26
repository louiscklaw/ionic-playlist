import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useRef } from 'react';
import {
  ellipsisHorizontal,
  ellipsisVertical,
  arrowBackOutline,
  shareSocialOutline,
  flagOutline,
  heartOutline,
  locationOutline,
} from 'ionicons/icons';

import './style.scss';

function ProductDetail() {
  // let contentRef = useIonRef();
  const paintWhiteHeader = () => {
    let el: HTMLElement | null = document.querySelector('#content-header');
    if (el) {
      console.log('paintWhiteHeader');
      el.classList.remove('text-black');
      el.classList.add('text-white');
    }
  };

  const paintResetHeader = () => {
    let el: HTMLElement | null = document.querySelector('#content-header');
    if (el) {
      // el.style.backgroundColor = 'unset';
      el.classList.add('text-black');
      el.classList.remove('text-white');
    }
  };

  const userScroll = (e: any) => {
    let { scrollTop } = e.target.detail;
    if (scrollTop > 100) {
      paintWhiteHeader();
    } else {
      paintResetHeader();
    }
  };

  return (
    <>
      <IonPage id="product-detail-page">
        <IonContent id="product-content" scrollEvents={true} onIonScroll={e => userScroll(e)}>
          <div
            id="content-header"
            className="text-black"
            style={{ transition: '1s', position: 'fixed', width: '100%' }}
          >
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton>
                    <IonIcon slot="icon-only" ios={arrowBackOutline} md={arrowBackOutline}></IonIcon>
                  </IonButton>
                </IonButtons>
                <IonButtons slot="end">
                  <IonButton>
                    <IonIcon slot="icon-only" ios={shareSocialOutline} md={shareSocialOutline}></IonIcon>
                  </IonButton>
                  <IonButton>
                    <IonIcon slot="icon-only" ios={flagOutline} md={flagOutline}></IonIcon>
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
          </div>

          <div
            style={{
              width: '100%',
              height: '300px',
              backgroundImage: 'url("https://images.unsplash.com/photo-1509440159596-0249088772ff")',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <IonText>
            <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
              <h6>M1蘋果保到2023年11月Mac Mini M1 8G 256G 新淨冇花，可連 MacBook,iPhone 14 pro max</h6>
              <p>2 weeks ago by ketchum8ash</p>
              <h6>HK$4,399</h6>
              <p style={{ color: 'grey' }}>HK$4,787</p>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: 0 }}>
                <p>19 Linkes</p>

                <p>Like new</p>

                <p>Meetup</p>

                <p>Description</p>

                <p>Posted</p>

                <p>Brand</p>

                <p>Apple</p>
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', color: 'grey', gap: '0.5rem' }}
              >
                <IonIcon ios={locationOutline} md={locationOutline}></IonIcon>
                <p>MTR Hong Kong Station (港鐵香港站)</p>
              </div>
              <p>
                少用，新淨 冇花痕跡 香港蘋果店保養到2023年11月尾 深水埗天后MTR(堅尼地城至天后）交收 可以去咖啡店測試
                可少議 only
              </p>
              <p>Meet-up</p>
              MTR Mong Kok Station (港鐵旺角站) MTR Tsim Sha Tsui Station (港鐵尖沙咀站) MTR Yau Ma Tei Station
              (港鐵油麻地站) MTR Sheung Wan Station (港鐵上環站)
              <IonIcon>MTR Sham Shui Po Station (港鐵深水埗站)</IonIcon>
              Ketchum Ash@ketchum8ash 5.0 (7 reviews)
            </div>
          </IonText>
        </IonContent>

        <IonFooter class="ion-no-border footer">
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton>
                <IonIcon slot="icon-only" ios={heartOutline} md={heartOutline}></IonIcon>
                11
              </IonButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton fill="outline" style={{ width: '100px' }}>
                Chat
              </IonButton>
              <IonButton fill="solid">Whatsapp</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </>
  );
}
export default ProductDetail;
