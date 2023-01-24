import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonSearchbar,
  IonList
} from "@ionic/react";
import { useEffect, useState } from "react";
import { mockedDoctors } from "../../../mocks/doctor";
import DoctorCard from "../../Patient/DoctorCard/DoctorCard";
import { findAllService } from "../../../services/findService";


const ListDoctor: React.FC = () => {
  const [items, setItems] = useState<any>('');
  // const listDoctors = mockedDoctors;
  // const data = listDoctors;
  const data = items;
  const [results, setResults] = useState([...data]);
  const role: string = "doctors";

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 5; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };   
   
   useEffect(() => {
    generateItems();
    handleChange();
      }, []);

  // const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
 
  const handleChange = async (ev?: Event) => {
    await findAllService.findAllDoctors(role).then((response: any) => {
      console.log(response.data);
      setItems(response.data);
      let query = "";
    if (ev != null) {
      const target = ev.target as HTMLIonSearchbarElement;
      if (target) query = target.value!.toLowerCase();
    }
    // eslint-disable-next-line array-callback-return
    setResults(response.data.filter((doctor: any) => {
      return doctor.name!.toLowerCase().indexOf(query) > -1 || query === '';
           // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      // teste.toLowerCase().indexOf(query) > -1;
    }))
    }).catch((err: any) => {
      console.log(err);
    });
    
  }



  const renderize = () => {
      return  (results.map((element: any, index: any) => (
        <IonItem key={index}>
          <DoctorCard props={element} key={element.id} />
        </IonItem>)
        ))
    // }
  }


  return (
    <IonContent>
      <IonSearchbar debounce={1000} onIonChange={(ev) => handleChange(ev)}></IonSearchbar>
      <IonList>
        {renderize()}
      </IonList>
      <IonInfiniteScroll
        onIonInfinite={(ev) => {
          generateItems();
          setTimeout(() => ev.target.complete(), 5000);
        }}
      >
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </IonContent>

  );
};

export default ListDoctor;


