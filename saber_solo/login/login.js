// Verificar se o usuário está autenticado ao carregar a página
window.addEventListener("load", function () {
  var loggedIn = sessionStorage.getItem("loggedIn");
  if (loggedIn === "true") {
    // Se estiver autenticado, redirecionar para a página home.html
    window.location.href = "/saber_solo/home.html";
  }
});

// Evento de submissão do formulário de login
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário (envio)

    // Simular autenticação bem-sucedida
    // Aqui, você autenticaria o usuário no seu sistema
    // Por enquanto, vamos apenas simular que o login foi feito com sucesso
    var email = document.getElementById("exampleInputEmail1").value;
    var senha = document.getElementById("exampleInputPassword1").value;

    // Verificação de autenticação (simulação)
    if (email === "turma4@hotmail.com" && senha === "12345") {
      // Definir o indicador de login na sessionStorage
      sessionStorage.setItem("loggedIn", "true");

      // Redirecionar para a página home.html após o login bem-sucedido
      window.location.href = "/saber_solo/home.html";
    } else {
      // Em caso de falha de autenticação, você pode exibir uma mensagem de erro ou realizar outra ação necessária
      console.log("Credenciais inválidas. Por favor, tente novamente.");
    }
  });
