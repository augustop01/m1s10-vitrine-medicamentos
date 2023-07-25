import { useContext } from "react";
import { MedicamentosContext } from "../../context/MedicamentosContext";

/* eslint-disable react/prop-types */
function CardMedicamento ({medicamento}){
  
  const {FavoritarMedicamento} = useContext(MedicamentosContext)
  
  return(
    <div>
      <button onClick={() => FavoritarMedicamento(medicamento.id)}>Faborito: {medicamento.favorito.toString()}</button>
      <h4>{medicamento.favorito}</h4>
      <img src="https://www.crfmg.org.br/site/uploads/img-corpo/20160707[154142]MIP.jpg"/>
      <h4>{medicamento.nome}</h4>
      <h4>{medicamento.lab}</h4>
      <h4>{medicamento.preco}</h4>
    </div>
  )
}

export default CardMedicamento;