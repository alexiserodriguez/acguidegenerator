//Test URI: lotlabel?lotId=dHVhjE7f28cJ3NNNB27Dsu&sku=PAINT0016&jobName=GARD%2010574&jobId=23717&release=1of1&kit=23717-R1-K1

import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import QRCode from "react-qr-code";

function LotLabel() {
  let [searchParams] = useSearchParams();
  const allParams = {};
  for (const [key, value] of searchParams.entries()) {
    allParams[key] = value;
  }
  //const { lotId, sku, jobName, jobId, release, kit, id } = allParams;
  const {guideNumber,client,tipoPaqueteria,ciudadColonia,programmedDispatch,includes,recibeDestino,direccionDestino,telefonoDestino,correoDestino,guideFile} = allParams


  useEffect(() => {
    window.print();
  }, []);

 // const guideImage="https://www.appsheet.com/template/gettablefileurl?appName=inventarionuevo-801982&tableName=Guias%20de%20envio%20PR&fileName="+guideFile;

  return (
    <div className="label">
      <div className="lot-info">
        <h1>Comanda Digital {guideNumber}</h1>
        <h2>
          Cliente
        </h2>
        <p>
          {client}
        </p>
        <h2>Tipo de Paquetería</h2>
        <p>
          {tipoPaqueteria}
        </p>
        <h2>
          A dónde va (ciudad y colonia)
        </h2>
        <p>
          {ciudadColonia}
        </p>
        <h2>
          Fecha de recolección
        </h2>
        <p>
          {programmedDispatch}
        </p>
        <h2>
          Qué incluye (productos y qué tamaño)
        </h2>
        <p>
          {includes}
        </p>
       </div>
        <div className="lot-info" style={{breakInside:"avoid",marginTop:"-30px"}}>
        <h2>
          Recibe:
        </h2>
        <p>
          {recibeDestino}
        </p>
        <h2>
          Dirección:
        </h2>
        <p>
        {direccionDestino}
        </p>
        <h2>
          Teléfono:
        </h2>
        <p>
          {telefonoDestino}
        </p>
        <h2>
          Correo:
        </h2>
        <p>
          {correoDestino}
        </p>
      </div>
    </div>
  );
}

export default LotLabel;
