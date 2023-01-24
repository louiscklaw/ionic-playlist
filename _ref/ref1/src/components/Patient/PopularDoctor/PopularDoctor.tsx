import { IonCard, IonCardContent } from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { favoriteDoctors } from "../../../mocks/favoritesDoctor";
import DoctorCard from "../DoctorCard/DoctorCard";
import "./style.css";

const PopularDoctor: React.FC = () => {
  const history = useHistory();
  const [listFavorites, setFavorites] = useState<any>([]);
  const doctor = listFavorites[0] || "";

  useEffect(() => {
    console.log(favoriteDoctors);
    setFavorites(favoriteDoctors);
  }, []);

  const seeAll = () => {
    history.replace("/favorite-doctors");
    window.location.reload();
  };

  const renderize = () => {
    console.log(listFavorites.length);
    if (listFavorites.length == 0) {
      return (
        <IonCard className="bd-20 cardDoctorWhite flex flex-col justify-center">
          <IonCardContent className="mt-32">
            <div className="text-black font-bold ">
              Você ainda não possui Favoritos!
            </div>
          </IonCardContent>
        </IonCard>
      );
    } else {
      return <DoctorCard props={doctor} key={doctor.id} />;
    }
  };



  return (
    <div className="container">
      <div className="titlePopular">
        <h1 className="font-bold text-l pl-3">Médicos Favoritos</h1>
        {listFavorites.length > 0 ? <span
          className="font-bold text-xs text-colored cursor-pointer"
          onClick={() => seeAll()}
        >
          Ver todos...
        </span> : ''}
        
      </div>
      {renderize()}
    </div>
  );
};

export default PopularDoctor;
