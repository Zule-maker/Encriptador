function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");

  let textoCifrado = texto.replace(/a/gi, "ai")
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");
    

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito"; 
    parrafo.textContent = "";
  } else {
    alert("Debes ingresar algún texto");
    tituloMensaje = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el Texto que desea encriptar o desencriptar";
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let textoCifrado = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
  } else {
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar algún texto");
  }
}
