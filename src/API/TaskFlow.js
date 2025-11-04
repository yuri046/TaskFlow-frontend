const Login = async (URL, user) => {
  try {
    const response = await fetch(URL + "login", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });

    if (!response.ok) throw new Error('Erro na requisição');

    const data = await response.json();
    console.log("Login feito com sucesso", data);

  } catch (error) {
    console.log("Erro", error);
  }
};