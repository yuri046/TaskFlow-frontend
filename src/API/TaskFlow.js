
export async function Login(URL, user){
  try {
    const response = await fetch(URL + "login", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });

    if (!response.ok) throw new Error('Erro na requisição');

    const data = await response.json();
    console.log("Login feito com sucesso", data);
    return data;

  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function Register(URL, newUser){
    try{
        const response = await fetch(URL + "register",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newUser)
        });

        if(!response.ok) throw new Error("Erro na requisição")
        
        const data = await response.text();
        console.log("Cadastro feito com sucesso", data)
    } catch(error){
        console.log(error)
        return null
    }
}

export async function GetUser(URL, token){
  try{
  const response = await fetch(URL + "users/me",{
    method:"GET",
    headers: {
      "Content-type":"application/json",
      "Authorization": "Bearer " + token
    }
});
  
  if(!response.ok){
    throw new Error("Erro ao buscar o usuario:" + response.status);
  }
  return await response.json()
} catch (error){
  console.log(error)
  return null
}}

export async function UpdateUser(URL, user, token){
  try{
  const response = await fetch(URL + "users/me",{
    method:"PUT",
    headers:{
      "Content-type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify(user)
  });
  
  if(!response.ok){
    throw new Error("Erro ao atualizar usuario " + response.status)
  }

  return await response.json()
} catch(error){
  console.log(error)
  return null
}
}


