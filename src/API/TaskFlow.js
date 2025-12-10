
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
        return true
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
  return response.json()
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

  return response.json()
} catch(error){
  console.log(error)
  return null
}
}

export async function CreateTask(URL ,newTask, token){
  try{
    const response = await fetch(URL + "tasks",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer " + token
      },
      body: JSON.stringify(newTask)
    })

    if(!response.ok){
      throw new Error("Erro ao criar tarefa")
    }

    return true
  } catch(error){
    console.log(error)
    return false
  }
}

export async function GetAllTasks(URL, token){
  try{
    const response = await fetch(URL + "tasks", {
      method:"GET",
      headers:{
        "Content-type":"application/json",
        "Authorization":"Bearer " + token
      }
    })
    if(!response.ok){
    throw new Error("Erro ao buscar tarefas:" + response.status);
  }
    return response.json()

  } catch(error){
    console.log(error)
    return null
  }
}

export async function UpdateTask(URL, token, task){
  try{
    const response = await fetch(URL + "tasks/" + task.id, {
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        "Authorization": "Bearer " + token
      },
      body:JSON.stringify(task)
    })

    if(!response.ok){
      console.log("Erro ao atualizar tarefa: " + response.status)
      return null
    }

    if (response.status === 204) {
      return true;
    }

    return response.json()
  } catch (error){
    console.log(error)
  }
}

export async function DeleteTask(URL, id, token){
  try{
    const response = await fetch(URL +"tasks/" + id, {
      method:"DELETE",
      headers:{
        "Authorization": "Bearer " + token
      },
    })

    if(!response.ok){
      console.log("Erro ao deletar tarefa: "+ response.status)
      return false
    }
    return true

  } catch(error){
    console.log(error)
    return false
  }
}

export async function ConcludeTask(URL, token, task){
  try{
    const response = await fetch(URL + "tasks/" + task.id,{
      method: "PUT",
      headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({"concluded":true})
    })

    if(!response.ok){
      console.log("Erro ao atualizar tarefa: "+ response.status)
      return false
    }
    return true

  } catch (error){
    throw new Error(error)
  }
}
