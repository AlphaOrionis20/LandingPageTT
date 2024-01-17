function mostrarSenha(){
    let inputPass = document.getElementById('senha')
    let btnshowPass = document.getElementById('btn-senha')
    
    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnshowPass.classList.replace('bi-eye','bi-eye-slash')
    }
    else{
        inputPass.setAttribute('type','password')
        btnshowPass.classList.replace('bi-eye-slash','bi-eye')
    }
}