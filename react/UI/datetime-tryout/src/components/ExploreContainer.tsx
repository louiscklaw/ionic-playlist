import './ExploreContainer.css';
import { IonButtons, IonButton, IonDatetime } from '@ionic/react';
import { useRef, useEffect } from 'react';
import './main.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0 && utcDay !== 6;
  };

  const datetime = useRef<null | HTMLIonDatetimeElement>(null);

  const reset = () => {
    datetime.current?.reset();
  };
  const cancel = () => {
    datetime.current?.cancel();
  };
  const confirm = () => {
    datetime.current?.confirm();
  };

  useEffect(() => {
    if (!datetime.current) return;
    datetime.current.value = ['2022-06-03', '2022-06-13', '2022-06-29'];
  }, []);

  return (
    <>
      <strong>Ready to create an app?</strong>
      {/* helloworld Theming
       */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>Theming</div>
        <div>
          <IonDatetime color="rose"></IonDatetime>
        </div>
      </div>

      {/* helloworld Showing Confirmation Buttons​
       */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>Showing Confirmation Buttons​</div>
        <div>
          <IonDatetime showDefaultButtons={true}>
            <IonButtons slot="buttons">
              <IonButton color="danger" onClick={reset}>
                Reset
              </IonButton>
              <IonButton color="primary" onClick={cancel}>
                Never mind
              </IonButton>
              <IonButton color="primary" onClick={confirm}>
                All Set
              </IonButton>
            </IonButtons>
          </IonDatetime>
        </div>
      </div>
      {/* helloworld Customizing the Title​         */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>Customizing the Title​</div>
        <div>
          <IonDatetime>
            <span slot="title">Select a Reservation Date</span>
          </IonDatetime>
        </div>
      </div>
      {/* helloworld Multiple Date Selection​         */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>Multiple Date Selection​</div>
        <div>
          <IonDatetime ref={datetime} presentation="date" multiple={true}></IonDatetime>
        </div>
      </div>
      {/* helloworld sample */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>helloworld sample</div>
        <div>
          <IonDatetime></IonDatetime>
        </div>
      </div>
      {/* helloworld start date end date */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>with start date and end date</div>
        <div>
          <IonDatetime value="2022-04-21T00:00:00" min="2022-03-01T00:00:00" max="2022-05-31T23:59:59"></IonDatetime>
        </div>
      </div>
      {/* helloworld Advanced Date Constraints */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>Advanced Date Constraints</div>
        <div>
          <IonDatetime isDateEnabled={isWeekday}></IonDatetime>
        </div>
      </div>
      {/* helloworld Custom Locale */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>Custom Locale</div>
        <div>
          <IonDatetime locale="es-ES"></IonDatetime>
        </div>
      </div>
      {/* helloworld Date Selection */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>Date Selection</div>
        <div>
          <IonDatetime presentation="date"></IonDatetime>
        </div>
      </div>
      {/* helloworld Wheel Style Pickers​
       */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>Wheel Style Pickers​</div>
        <div>
          <IonDatetime presentation="date-time" preferWheel={true}></IonDatetime>
        </div>
      </div>
    </>
  );
};

export default ExploreContainer;
