/* eslint-disable react/prop-types */
/**
 * PASSOS PARA CRIAR UM CONTEXTO
 * 1 - [X] - importe o createContext do react
 * 2 - [X] - criar a variável do context
 *    obs: por padrão o contexto recebe o mesmo nome do arquivo
 *    obs: lembre-se de exportar a variável do context (sem default)
 * 3 - [X] - defina o provider
 *    obs: lembre-se de exportar a variável do provider (sem default)
 *    3.1 - [X] - defina os dados globais
 *    3.2 - [X] - defina o value do provider
 *      obs: geralmente o value vai ser um objeto (entre {{chaves}})
 *    3.3 - [] - defina o children
  ---------------------------------------------------------------------
*/

import { createContext, useState } from "react";

export const MedicamentosContext = createContext();

export const MedicamentosContextProvider = ({children}) => {

  const [listaMedicamentos, setListaMedicamentos] = useState(JSON.parse(localStorage.getItem("listaMedicamentos")) || [])

  const AdicionarMedicamentos = (nome, lab, preco) => {
    if(nome.length == "" || lab.length == "" || preco == 0 || preco == ""){
      alert('Preencha todas as informações.')
      return
    }

    const novoMedicamento = {
      id: listaMedicamentos.length + 1,
      nome: nome,
      laboratorio: lab,
      preco: `R$${preco},00`,
      favorito: false
    }

    const  novaLista = [...listaMedicamentos, novoMedicamento]
    localStorage.setItem("listaMedicamentos", JSON.stringify(novaLista))
    setListaMedicamentos(novaLista);
    alert("Medicamento cadastrado com sucesso!")
  }


  const FavoritarMedicamento = (id) => {

// /* --- SOLUÇÃO 1 --- */

  //   // procuramos o medicamento a ser editado
  //   const medicamento = listaMedicamentos.filter(item => item.id == id);

  //   // verificamos se o medicamento foi encontrado
  //   if(medicamento.length == 0) {
  //     return
  //   }

  //   //pegamos uma lista filtrada sem o medicamento a ser editado
  //   const listaFiltrada = listaMedicamentos.filter(item => item.id != id);

  //   // marcamos o medicamento como favorito
  //     medicamento.favorito = !medicamento.favorito
    
  //   // juntamos novamente o medicamento selecionado na lista geral
  //   const novaLista = [...listaFiltrada, medicamento]

  //   // atualizamos a lista
  //   setListaMedicamentos(novaLista)
  // }

  // return (
  //   <MedicamentosContext.Provider value={{listaMedicamentos, AdicionarMedicamentos}}>
  //     {children}
  //   </MedicamentosContext.Provider>
  // )

  // SOLUÇÃO 2

  const lista = listaMedicamentos.map(item => {
    if(item.id == id){
      item.favorito = !item.favorito
    }

    return item
  })

setListaMedicamentos(lista);
  }

return (
      <MedicamentosContext.Provider value={{listaMedicamentos, AdicionarMedicamentos, FavoritarMedicamento}}>
        {children}
      </MedicamentosContext.Provider>
    )
}
