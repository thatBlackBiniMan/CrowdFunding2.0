import React, { useContext, createContext} from "react";
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0x9301A0A8780c92D545E046b8827d0453d5F96c62');
  const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
   try {
    const data = await createCampaign([
      address, 
      form.title, 
      form.target,
      new Date(form.deadline).getTime(),
      form.image
    ])
     console.log("contract call sucess");
   } catch (error) {
    console.log("contract call failed", error);
   }
   
   }
   return (
    <StateContext.Provider value={{
      address,
      contract,
      connect,
      createCampaign: publishCampaign,
    }}>
      {children}
    </StateContext.Provider>
   )
}

export const useStateContext = ()=> useContext(StateContext);