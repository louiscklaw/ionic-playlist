import { useEffect, useState } from "react";
import {
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonPage,
  IonSearchbar,
} from "@ionic/react";
import Identificador from "../../../components/Identificador/Identificador";
import { documentTextOutline } from "ionicons/icons";
import { mockedRecords } from "../../../mocks/records";

const HistoricalDoctor: React.FC = () => {
  const [namePacient, setNamePacient] = useState<any>(mockedRecords);
  const [results, setResults] = useState(['']);
  const [busy, setBusy] = useState(false);
  const [listA, setListA] = useState([]);
  const [listB, setListB] = useState([]);
  const [listC, setListC] = useState([]);
  const [listD, setListD] = useState([]);
  const [listE, setListE] = useState([]);
  const [listF, setListF] = useState([]);
  const [listG, setListG] = useState([]);
  const [listH, setListH] = useState([]);
  const [listI, setListI] = useState([]);
  const [listJ, setListJ] = useState([]);
  const [listK, setListK] = useState([]);
  const [listL, setListL] = useState([]);
  const [listM, setListM] = useState([]);
  const [listN, setListN] = useState([]);
  const [listO, setListO] = useState([]);
  const [listP, setListP] = useState([]);
  const [listQ, setListQ] = useState([]);
  const [listR, setListR] = useState([]);
  const [listS, setListS] = useState([]);
  const [listT, setListT] = useState([]);
  const [listU, setListU] = useState([]);
  const [listV, setListV] = useState([]);
  const [listW, setListW] = useState([]);
  const [listX, setListX] = useState([]);
  const [listY, setListY] = useState([]);
  const [listZ, setListZ] = useState([]);

  const newList = () => {
    setListA(
      namePacient.filter((item: any) => {
        return (
          (item.name.toLowerCase().charAt(0) === "a")
        );
      })
    );
    setListB(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "b";
      })
    );
    setListC(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "c";
      })
    );
    setListD(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "d";
      })
    );
    setListE(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "e";
      })
    );
    setListF(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "f";
      })
    );
    setListG(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "g";
      })
    );
    setListH(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "h";
      })
    );
    setListI(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "i";
      })
    );
    setListJ(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "j";
      })
    );
    setListK(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "k";
      })
    );
    setListL(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "l";
      })
    );
    setListM(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "m";
      })
    );
    setListN(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "n";
      })
    );
    setListO(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "o";
      })
    );
    setListP(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "p";
      })
    );
    setListR(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "r";
      })
    );
    setListS(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "s";
      })
    );
    setListT(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "t";
      })
    );
    setListU(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "u";
      })
    );
    setListV(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "v";
      })
    );
    setListX(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "x";
      })
    );
    setListW(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "w";
      })
    );
    setListY(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "y";
      })
    );
    setListZ(
      namePacient.filter((item: any) => {
        return item.name.toLowerCase().charAt(0) === "z";
      })
    );
  };

  const handleChange = (ev?: Event) => {
    let query = "";
    setBusy(true);
    if (ev != null) {
      const target = ev.target as HTMLIonSearchbarElement;
      if (target) query = target.value!.toLowerCase();
      if (query === "") {
        setBusy(false);
      }
    } else {
      setBusy(false);
    }
    // eslint-disable-next-line array-callback-return
    setResults(
      namePacient.filter((patient: any) => {
        return (
          (patient.name!.toLowerCase().indexOf(query) > -1) 
        );
      })
    );
  };
  
  const renderize = () => {
    return results.map((element: any, index: any) => (
      <IonItem key={index}>
         <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{element.name}</IonLabel>
          </IonItem>
      </IonItem>
    ));
  };

  useEffect(() => {
    newList();
    handleChange();
  }, []);



  return (
    <IonPage>
      <IonContent className="overflow-y-auto">
        <IonImg
          src="./assets/logo.png"
          className="imgLogoSmall flex item.names-center mx-auto -mb-7"

        />
        <Identificador />
        <IonSearchbar
          debounce={1000}
          placeholder="Procure pelo nome do Paciente"
          onIonChange={(ev) => handleChange(ev)}
        ></IonSearchbar>
        {busy == true && renderize()}
        {(listA.length > 0 && !busy)&& (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">A</IonLabel>
            </IonItemDivider>
            {listA.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
        {(listB.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">B</IonLabel>
            </IonItemDivider>
            {listB.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
        {(listC.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">C</IonLabel>
            </IonItemDivider>
            {listC.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
        {(listD.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">D</IonLabel>
            </IonItemDivider>
            {listD.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
            {(listE.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">E</IonLabel>
            </IonItemDivider>
            {listE.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
            {(listF.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">F</IonLabel>
            </IonItemDivider>
            {listF.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
            {(listG.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">G</IonLabel>
            </IonItemDivider>
            {listG.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
         {(listH.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">H</IonLabel>
            </IonItemDivider>
            {listH.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listI.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">I</IonLabel>
            </IonItemDivider>
            {listI.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listJ.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">J</IonLabel>
            </IonItemDivider>
            {listJ.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listK.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">K</IonLabel>
            </IonItemDivider>
            {listK.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listL.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">L</IonLabel>
            </IonItemDivider>
            {listL.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listM.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">M</IonLabel>
            </IonItemDivider>
            {listM.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listN.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">N</IonLabel>
            </IonItemDivider>
            {listN.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listO.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">O</IonLabel>
            </IonItemDivider>
            {listO.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listP.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">P</IonLabel>
            </IonItemDivider>
            {listP.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listQ.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">Q</IonLabel>
            </IonItemDivider>
            {listQ.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listR.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">R</IonLabel>
            </IonItemDivider>
            {listR.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listS.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">S</IonLabel>
            </IonItemDivider>
            {listS.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listT.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">T</IonLabel>
            </IonItemDivider>
            {listT.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listU.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">U</IonLabel>
            </IonItemDivider>
            {listU.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listV.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">V</IonLabel>
            </IonItemDivider>
            {listV.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
           {(listW.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">W</IonLabel>
            </IonItemDivider>
            {listW.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listX.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">X</IonLabel>
            </IonItemDivider>
            {listX.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listY.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">Y</IonLabel>
            </IonItemDivider>
            {listY.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
          {(listZ.length > 0 && !busy) && (
          <IonItemGroup>
            <IonItemDivider className="bg-primary">
              <IonLabel className="text-white">Z</IonLabel>
            </IonItemDivider>
            {listZ.map((item: any, index: any) => (
              <IonItem key={index}>
                <IonIcon src={documentTextOutline} color="primary"></IonIcon>
                <IonLabel className="ml-2">{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        )}
      </IonContent>
    </IonPage>
  );
};
export default HistoricalDoctor;
