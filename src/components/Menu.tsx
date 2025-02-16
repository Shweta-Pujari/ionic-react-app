import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonCard,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, checkboxSharp, heartOutline, heartSharp, list, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'List',
    url: '/List',
    iosIcon: list,
    mdIcon: list
  },
  {
    title: 'Books',
    url: '/Books',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'AddBook',
    url: '/AddBook',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Villas',
    url: '/Villas',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Menu</IonListHeader>
          <IonNote>Ionic Components</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

       
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
