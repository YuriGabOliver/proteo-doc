(function () {
  const senhaCorreta = "proteo@2026";

  
  const autenticado = sessionStorage.getItem("proteo_auth");

  const paginaAtual = window.location.pathname;

 
  if (!autenticado && !paginaAtual.includes("login.html")) {
    window.location.href = "/login.html";
  }

 
  window.proteoLogin = function () {
    const senha = document.getElementById("senha").value;

    if (senha === senhaCorreta) {
      sessionStorage.setItem("proteo_auth", "true");
      window.location.href = "/index.html";
    } else {
      alert("Senha incorreta!");
    }
  };
})();
