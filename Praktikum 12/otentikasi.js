const username = "karina"
const password = "123456789"

function auth(){
    // tangkap nilai yang dinput user 
    // && operator logika yang keduanya bernilai true 
    // operator logika
    let userInput = document.getElementById ("username").value
    let passwordInput = document.getElementById ("password").value

    let form = document.getElementById('form')

    if (username == userInput && password == passwordInput){
        alert ("Login Berhasil!")
        form.submit()

    } else{
        alert("Login Gagal!")
    }
}