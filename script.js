const textArea = document.querySelector(".text-area"); 
const mensaje = document.querySelector(".msn"); 
const text = document.querySelector(".noEncontrado");
const visual = document.querySelector(".encontradoMensaje");

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.toLowerCase().match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function botonEncriptar(){
    if(!validarTexto()) {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;       
    text.style.display = "inline-block";
    visual.style.display = "none";
    textArea.value ="";
    
}
}

function encriptar(stringEncriptada) {
    let codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    if(stringEncriptada === ""){
        alert("ingrese texto para encriptar");       
      }  
    for (let i = 0; i < codigo.length; i++){
        if(stringEncriptada.includes(codigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(codigo[i][0], codigo[i][1]);           
        }        
    }
    return stringEncriptada
}


function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value ="";
    visual.style.display = "none";
    text.style.display = "inline-block";
}


function desencriptar(stringDesencriptada) {
    let codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
        
    for (let i = 0; i < codigo.length; i++){
        if(stringDesencriptada.includes(codigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(codigo[i][1], codigo[i][0]);
        }        
    }
    return stringDesencriptada;
}

function botonCopiar(){
    let contenido = document.querySelector(".msn");
    contenido.select();
    document.execCommand("copy"); 
    alert("texto copiado")
}

