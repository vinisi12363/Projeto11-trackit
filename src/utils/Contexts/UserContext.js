import React from 'react';
import { useState } from 'react';


const UserContext = React.createContext({
    "id": 0,
    "name": "",
    "image": "",
    "email": "",
    "password": "",
    "token": "",
    setarDados: () =>{}
});


export const UserContextProvider = (props) => {
const [dados, setDados] = useState({
    "id": 0,
    "name": "",
    "image": "",
    "email": "",
    "password": "",
    "token": "",
});
  
const atualizarDados = (novosDados) => {
    setDados((dadosAntigos) => ({
    ...dadosAntigos,
    ...novosDados
    }));
};
  
    return (
      <UserContext.Provider value={{ ...dados, atualizarDados }}>
        {props.children}
      </UserContext.Provider>
    );
  };
  
  export default UserContext;