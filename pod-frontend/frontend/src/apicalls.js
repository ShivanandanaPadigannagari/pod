import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/";


  
let config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("user"))}`  
}
}
export const getEmployees= async()=>{
  
    const resp= await axios.get(EMPLOYEE_API_BASE_URL+'users',config);
    return resp.data.result;
    
}

export const createEmployee=async (employee)=>{
    const resp = await  axios.post(EMPLOYEE_API_BASE_URL+'users', employee,config);
    return resp.data.result;
}

export const getEmployeeById=(employeeId)=>{
    return axios.get(EMPLOYEE_API_BASE_URL+'users/' + employeeId);
}

export const updateEmployee= async (employee, employeeId)=>{
  const resp= await axios.put(EMPLOYEE_API_BASE_URL+'users/' + employeeId, employee,config);
 return resp.data.result;
}

export const deleteEmployee=async (employeeId)=>{
   const resp= await axios.delete(EMPLOYEE_API_BASE_URL+'users/' + employeeId,config); 
   return resp.data.result;  
}
export const getEmployeeByEmail = async (emailId) => {
  let config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem("user"))}`  
  }
  }
    
    const resp = await axios.get(EMPLOYEE_API_BASE_URL+`users/user?username=${emailId}`,config);
    return resp.data.result;
   
//    return  fetch(`${EMPLOYEE_API_BASE_URL}users/user?username=${emailId}`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${JSON.parse(localStorage.getItem("user"))}`
    
//     }
//   }).then((resp) => {
//       console.log(resp)
//       return resp.json()
//   }).catch((err) => {console.log(err)
//         return {resp: err};
//     })
}

export const login = async (emailId,password)=>{
        const data = {
        username:emailId,
        password: password
      }
      return await fetch(`${EMPLOYEE_API_BASE_URL}token/generate-token`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        }
      }).then(resp => {
        if (resp.status === 200) {  
          return resp.json()
        } else if (resp.status === 401) {
          throw new Error("Invalid EmailId or Password")
        } else {
          throw new Error("Some error occured. Please try later")
        }
      }).then(resp => {
            localStorage.setItem('user', JSON.stringify(resp.result.token));
        }).catch((err) => {
            return {resp: err};
        })
}


export const signup = async (data)=>{
 
return await fetch(`${EMPLOYEE_API_BASE_URL}token/signup`, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  }
}).then(resp => {
  if (resp.status === 200) {  
    return resp.json()
  } else if (resp.status === 401) {
    throw new Error("Invalid EmailId or Password")
  } else {
    throw new Error("Some error occured. Please try later")
  }
}).then(resp => {
     return resp;
  }).catch((err) => {
      return {err:err};
  })
}