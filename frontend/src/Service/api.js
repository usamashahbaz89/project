import axios from 'axios';

const url = "http://localhost:5000";


export const addApplicant = async(applicantData) =>{   
  return await axios.post(`${url}/pcgamingbuilds`, applicantData);
}

export const getApplicant = async() => {

  return await axios.get(`${url}/applicantslist`);
}

export const deleteApplicant = async (id) => {
   
  return await axios.delete(`${url}/applicantslist/delete/${id}`);
}

export const updateApplicant = async (id,state)=>{ 
  
  return await axios.patch(`${url}/applicantslist/update/${id}`,state)
}
