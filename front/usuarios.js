document.addEventListener('DOMContentLoaded', carregarUsuarios);

function carregarUsuarios() {
  fetch('http://localhost:8080/usuarios') // Seu endpoint para pegar usuários
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao buscar usuários');
      }
      return response.json();
    })
    .then(usuarios => {
      const lista = document.getElementById('listaUsuarios');
      lista.innerHTML = ''; // Limpa qualquer conteúdo anterior na lista

      if (usuarios.length === 0) {
        lista.innerHTML = '<li>Nenhum usuário encontrado.</li>';
        return;
      }

      // Para cada usuário, cria um item na lista
      usuarios.forEach(usuario => {
        const item = document.createElement('li');

        item.innerHTML = `
          <span>Nome: ${usuario.nome}</span>
          <span>Telefone: ${usuario.telefone}</span>
          <span>CPF: ${usuario.cpf}</span>
          <span>CEP: ${usuario.cep}</span>
          <span>E-mail: ${usuario.email}</span>
        `;

        lista.appendChild(item);
      });
    })
    .catch(erro => {
      const lista = document.getElementById('listaUsuarios');
      lista.innerHTML = '<li>Erro ao carregar usuários.</li>';
    });
}
