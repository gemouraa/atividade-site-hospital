const apiUrl = "http://localhost:8080/usuarios"; // URL da sua API

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");

  // Verifica se o formulário de cadastro existe
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const dados = Object.fromEntries(new FormData(form).entries()); // Pega os dados do formulário

      try {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados),
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Erro ao cadastrar usuário.");
        }

        alert("Usuário cadastrado com sucesso!");
        form.reset(); // Limpa o formulário
      } catch (error) {
        alert("Erro: " + error.message);
      }
    });
  }
});
