let button = document.getElementById("button");

function execute(e) {
    e.preventDefault();
    let surname = document.getElementById("soyisim").value;
    let name = document.getElementById("isim").value;
    let phone = document.getElementById("tel").value;
    let address = document.getElementById("adres").value;

    if(surname == "" || name == "" || phone == "" || address == "") {
        alert("Bu alanlar boş bırakılamaz");
    } else {
        console.log(`
        Adınız: ${name}
        Soyadınız: ${surname}
        Telefon numaranız: ${phone}
        Adresiniz: ${address}`
        );
        alert("Formunuz başarıyla gönderildi");
        document.getElementById("button").querySelector(type="submit").innerHTML = "Hoş geldiniz";
    }   
};