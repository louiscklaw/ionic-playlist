import './ExploreContainer.css';
import React, { useRef, useState } from 'react';

import { IonItem, IonList, IonButton, IonContent, IonPopover, useIonPopover } from '@ionic/react';

interface ContainerProps {}

const Popover = () => <IonContent className="ion-padding">Hello World!</IonContent>;

const ExploreContainer: React.FC<ContainerProps> = () => {
  const popover = useRef<HTMLIonPopoverElement>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const openPopover = (e: any) => {
    popover.current!.event = e;
    setPopoverOpen(true);
  };

  const [present, dismiss] = useIonPopover(Popover, {
    onDismiss: (data: any, role: string) => dismiss(data, role),
  });
  const [roleMsg, setRoleMsg] = useState('');

  return (
    <div>
      <div>
        <IonButton id="open-popover">Open Popover</IonButton>
        <IonPopover keepContentsMounted={true} trigger="open-popover">
          <IonContent class="ion-padding">This content was mounted as soon as the popover was created.</IonContent>
        </IonPopover>
      </div>

      <div>
        <IonButton id="popover-button">Open Menu</IonButton>
        <IonPopover trigger="popover-button" dismissOnSelect={true}>
          <IonContent>
            <IonList>
              <IonItem button={true} detail={false}>
                Option 1
              </IonItem>
              <IonItem button={true} detail={false}>
                Option 2
              </IonItem>
              <IonItem button={true} id="nested-trigger">
                More options...
              </IonItem>

              <IonPopover trigger="nested-trigger" dismissOnSelect={true} side="end">
                <IonContent>
                  <IonList>
                    <IonItem button={true} detail={false}>
                      Nested option
                    </IonItem>
                  </IonList>
                </IonContent>
              </IonPopover>
            </IonList>
          </IonContent>
        </IonPopover>
      </div>

      <div>
        <IonButton id="click-trigger">Left-Click Me</IonButton>
        <IonPopover trigger="click-trigger" triggerAction="click">
          <IonContent class="ion-padding">Hello World!</IonContent>
        </IonPopover>
      </div>

      <div>
        <IonButton id="context-menu-trigger">Right-Click Me</IonButton>
        <IonPopover trigger="context-menu-trigger" triggerAction="context-menu">
          <IonContent class="ion-padding">Hello World!</IonContent>
        </IonPopover>
      </div>

      <div>
        <IonButton id="hover-trigger">Hover Over Me</IonButton>
        <IonPopover trigger="hover-trigger" triggerAction="hover">
          <IonContent class="ion-padding">Hello World!</IonContent>
        </IonPopover>
      </div>

      <div>
        <IonButton onClick={openPopover}>Click Me</IonButton>
        <IonPopover ref={popover} isOpen={popoverOpen} onDidDismiss={() => setPopoverOpen(false)}>
          <IonContent class="ion-padding">Hello World!</IonContent>
        </IonPopover>
      </div>

      <div>
        <IonButton
          onClick={(e: any) =>
            present({
              event: e,
              onDidDismiss: (e: CustomEvent) => setRoleMsg(`Popover dismissed with role: ${e.detail.role}`),
            })
          }
        >
          Click Me
        </IonButton>
        <p>{roleMsg}</p>
      </div>

      <div>
        <IonButton id="trigger-button">Click Me</IonButton>
        <IonPopover trigger="trigger-button">
          <IonContent className="ion-padding">Hello Styled World!</IonContent>
        </IonPopover>
      </div>

      <div>
        <IonButton id="top-center">Side=Top, Alignment=Center</IonButton>
        <IonPopover trigger="top-center" side="top" alignment="center">
          <IonContent class="ion-padding">Hello World!</IonContent>
        </IonPopover>

        <IonButton id="bottom-start">Side=Bottom, Alignment=Start</IonButton>
        <IonPopover trigger="bottom-start" side="bottom" alignment="start">
          <IonContent class="ion-padding">Hello World!</IonContent>
        </IonPopover>

        <IonButton id="left-start">Side=Left, Alignment=Start</IonButton>
        <IonPopover trigger="left-start" side="left" alignment="start">
          <IonContent class="ion-padding">Hello World!</IonContent>
        </IonPopover>

        <IonButton id="right-end">Side=Right, Alignment=End</IonButton>
        <IonPopover trigger="right-end" side="right" alignment="end">
          <IonContent class="ion-padding">Hello World!</IonContent>
        </IonPopover>
      </div>

      <div>
        <IonButton id="auto-trigger">Size=Auto</IonButton>
        <IonPopover trigger="auto-trigger" size="auto">
          <IonContent class="ion-padding">Hello!</IonContent>
        </IonPopover>

        <IonButton id="cover-trigger">Size=Cover</IonButton>
        <IonPopover trigger="cover-trigger" size="cover">
          <IonContent class="ion-padding">Hello!</IonContent>
        </IonPopover>
      </div>
    </div>
  );
};

export default ExploreContainer;
