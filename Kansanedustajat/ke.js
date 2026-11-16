fetch("edustajat.json")
    .then(response => response.json())
    .then(data => {
        let lista = document.getElementById("edustajat");

        data.forEach(edustaja => {
            lista.innerHTML += "<p>" + edustaja.nimi
                + " - " + edustaja.puolue + "</p>";
        });
    });
