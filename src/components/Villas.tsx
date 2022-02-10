
import { IonButton,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar,IonIcon,IonFabButton,IonFab, IonSearchbar, IonThumbnail, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { add, pencil, pencilSharp, trash, trashBin,} from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Header from './Header';
import { useState } from 'react';
import {getVillas} from '../services/VillasAPI'
import avtar from '../assets/bandit.png'
import React from 'react';
import { useHistory } from 'react-router';
import {location} from 'ionicons/icons'
interface myProps {
    random: number;
 }

 

 interface myCustomer {
    id: any;
    image: string;
    title: string;
    price: string;
    Location: string;
    rooms: string
    totalarea: string
   
 }
 

const Villa = () => {
  const [searchText, setSearchText] = useState('');
  const history = useHistory();
  const [bookList,setBooks] = useState([]);
  const loadVillas = async () =>{
    let tempData = await getVillas();
    setBooks(tempData);
    console.log("tempData:",tempData);
  }
 
  React.useEffect(() => {
    let unlisten = history.listen((location, action) => {
        loadVillas();
      });
      loadVillas();
      return(unlisten);
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Villas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      
       <IonList>
        {bookList.map((data:any)=>{
          return(
            <IonItem key={data.id}>

<IonCard>
          <img src={data.image} />
          <IonCardHeader>
            <IonCardSubtitle>{data.title}</IonCardSubtitle>
            {/* <IonCardTitle>{data.price}</IonCardTitle> */}
            <p>{data.price}</p>
          </IonCardHeader>
          <IonCardContent>
           <IonIcon icon={location}/>{data.Location} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <IonButton color="danger" size='small'  >More</IonButton>
            <IonButton size='small' color="danger" >Book Villa</IonButton>
           


          </IonCardContent>
        </IonCard>
               
          </IonItem>
          
          )
        })}
        </IonList>        
         
        </IonContent>
    </IonPage>
  );
};

export default Villa;
