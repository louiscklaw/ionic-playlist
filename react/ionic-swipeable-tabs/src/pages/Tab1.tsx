import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {SuperTabsContainer, SuperTab, SuperTabs, SuperTabsToolbar, SuperTabButton } from '@ionic-super-tabs/react';


// super-tabs-toolbar/super-tabs-toolbar.component.d.ts
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}
        <SuperTabs >
          <SuperTabsToolbar scrollable >
            <SuperTabButton>中文中文1</SuperTabButton>
            <SuperTabButton>中文中文2</SuperTabButton>
            <SuperTabButton>中文中文3</SuperTabButton>
            <SuperTabButton>中文中文4</SuperTabButton>
            <SuperTabButton>中文中文5</SuperTabButton>
            <SuperTabButton>中文中文6</SuperTabButton>
          </SuperTabsToolbar>

          <SuperTabsContainer>
            <SuperTab noScroll>1</SuperTab>
            <SuperTab noScroll>2</SuperTab>
            <SuperTab noScroll>3</SuperTab>
            <SuperTab noScroll>1</SuperTab>
            <SuperTab noScroll>2</SuperTab>
            <SuperTab noScroll>3</SuperTab>

          </SuperTabsContainer>
        </SuperTabs>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
