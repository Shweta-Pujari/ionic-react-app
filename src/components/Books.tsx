import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar,IonIcon,IonFabButton,IonFab, IonSearchbar } from '@ionic/react';
import { add, pencil, pencilSharp, trash, trashBin,} from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from './ExploreContainer';
//import Header from './Header';
import { useState } from 'react';
import {getBooks,deleteBook} from '../services/BookRESTAPI'
import avtar from '../assets/bandit.png'
import React from 'react';
import { useHistory } from 'react-router';
import { Url } from 'url';

interface myProps {
    random: number;
 }

 interface myBook {
    id: any;
    title: string;
    author: string;
    publisher: string;
    isbn:any;
    year:any;
    cover:Url;
 }

const List = () => {
  const history = useHistory();
  const [bookList,setBooks] = useState([]);
  const loadBooks = async () =>{
    let tempData = await getBooks();
    setBooks(tempData);
    console.log("tempData:",tempData);
  }
  const doDelete = async (id:any)=>{
    await deleteBook(id);
    loadBooks();
  }
  React.useEffect(() => {
    let unlisten = history.listen((location, action) => {
        loadBooks();
      });
      loadBooks();
      return(unlisten);
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonSearchbar onIonChange={e => setSearchText(e.detail.value!)} 
      showCancelButton="focus"></IonSearchbar>
       <IonList>
        {bookList.map((data:any)=>{
          return(
            <IonItem key={data.id}>
            <IonAvatar slot="start">
              <img src= {data.cover} />
            </IonAvatar>
            <IonLabel>
              <h2>{data.title}</h2>
              <h3>{data.author}</h3>
              <h3>{data.publisher}</h3>
              <h3>{data.isbn}</h3>
              <h3>{data.year}</h3>
              
            </IonLabel>
              <IonIcon size={'10'} 
              onClick={()=>{history.push('/EditBook/'+data.id)}}
               icon={pencil} />
              <IonIcon size={'10'} 
              onClick={()=>{doDelete(data.id)}} 
              icon={trash} />      
          </IonItem>
          )
        })}
        </IonList>        
          <IonFab vertical="bottom" horizontal="end"slot="fixed">   
          <a href="/AddBook" >
          <IonFabButton>
              <IonIcon icon={add}/>
            </IonFabButton>
            </a>
          </IonFab>
        </IonContent>
    </IonPage>
  );
};

export default List;
function setSearchText(arg0: string): void {
  throw new Error('Function not implemented.');
}