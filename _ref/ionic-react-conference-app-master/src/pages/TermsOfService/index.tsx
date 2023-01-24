import { IonContent, IonPage, IonText } from '@ionic/react';
import React from 'react';

function TermsOfService() {
  return (
    <>
      <IonPage>
        <IonContent>
          <div style={{ padding: '3rem' }}>
            <IonText>
              Yahoo!
              JAPAN利用規約（以下「本利用規約」といいます）は、第1編の基本ガイドラインおよびサービス固有の利用条件（第2編の個別サービスガイドラインを含みます）で構成されます。
              なお、Yahoo! JAPAN
              IDを登録していただく際には、基本ガイドラインにご同意いただき、サービス固有の利用条件につきましては、それぞれ、ヤフー株式会社（以下「当社」といいます）のサービスのご利用の際にご同意いただくことになります。
            </IonText>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
}
export default TermsOfService;
