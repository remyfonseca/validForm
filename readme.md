# ✅ ValidForm  - Formulário com Validação em JavaScript

Este projeto apresenta um formulário moderno, responsivo e totalmente validado utilizando JavaScript. Ele realiza validações completas de campos, incluindo verificação de CPF, nome de usuário e senhas. O layout foi desenvolvido com HTML e CSS, utilizando variáveis e design responsivo para proporcionar uma experiência de usuário aprimorada.

## 💡 Funcionalidades

- Validação de todos os campos obrigatórios
- Verificação de CPF válido
- Restrições para nome de usuário:
    - Apenas letras e números
    - Entre 3 e 12 caracteres
- Senhas:
    - Senha e confirmação devem coincidir
    - Entre 6 e 12 caracteres
- Mensagens de erro claras e dinâmicas
- Layout responsivo e visual moderno

## 🧪 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e organizada
- **CSS3**: Estilização moderna e responsiva
- **JavaScript**: Validação e manipulação dos campos do formulário
- **BoxIcons**: Ícones elegantes na interface
- **Google Fonts**: Tipografia personalizada

## 🧩 Como Funciona o Código

ValidaFormulario:
- **constructor()**: Seleciona o formulário e ativa o listener de envio.
- **handleSubmit(e)**: Impede envio padrão, valida campos e senhas, e exibe alerta de sucesso se tudo estiver correto.
- **camposValidos()**: Valida campos obrigatórios, usuário (entre 3-12 caracteres alfanuméricos) e CPF.
- **senhasValidas()**: Verifica se as senhas coincidem e estão entre 6 e 12 caracteres.
- **criaErro(campo, msg)**: Insere uma mensagem de erro logo após o campo inválido.

ValidadorCPF:
- **valida()**: Limpa o CPF, verifica estrutura básica e calcula os dígitos finais para validar o número.

## 🚀 Como Visualizar o Projeto

1. Clone este repositório:
     ```bash
     git clone https://github.com/remyfonseca/validForm.git
     ```
2. Acesse o diretório do projeto.
3. Abra o arquivo `index.html` no navegador para testar o formulário.
4. Ou acesse diretamente pelo GitHub Pages: [ValidForm no GitHub Pages](https://remyfonseca.github.io/validForm/)

## 📬 Contato

- **GitHub**: [Remy Fonseca](https://github.com/remyfonseca)
- **LinkedIn**: [Remy Fonseca](https://www.linkedin.com/in/remyfonseca/)

---

**© 2025 Remy Fonseca - Todos os direitos reservados.**