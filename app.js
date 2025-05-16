class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', (e) => {
            this.handleSubmit(e);  
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposValidos();
        const senhasValidas = this.senhasValidas();
        

        if(camposValidos && senhasValidas){
            alert(`Dados válidos! Bem vindo(a) ${usuario.value}.`);
            this.formulario.reset();
        }
    }

    camposValidos(){
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
           let label = campo.previousElementSibling.innerHTML;
           label = label.replace(/:/g,"").trim();
           
           if(!campo.value){
                this.criaErro(campo, `Campo "${label}" não pode estar vazio!`);
                valid = false;
           }

           if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
           }

           if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
           }
        }

        return valid;
    }

    senhasValidas(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');


        if(senha.value !== repetirSenha.value){
            valid = false;

            this.criaErro(senha, 'Campos Senha e Repetir Senha precisam ser iguais!');
            this.criaErro(repetirSenha, 'Campos Senha e Repetir Senha precisam ser iguais!');
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres!')
        }

        return valid;
    }

    validaCPF(campo){
        const cpf = new ValidadorCPF(campo.value);

        if(!cpf.valida()){
            this.criaErro(campo, 'CPF inválido!');
            return false;
        }

        return true;
    }


    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo, 'Campo Usuário precisa ter entre 3 e 12 caracteres!');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/)){
            this.criaErro(campo, 'Campo Usuário deve conter apenas letras e números!');
            valid = false;
        }

        return valid;
    }


    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();