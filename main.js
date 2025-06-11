//! FUNCTIONS



//!END FUNCTIONS

//Dichiaro l'array di Oggetti
const teamMembers = [
{
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
},
{
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
},
{
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
},
{
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
},
{
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
},
{
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
}
];

//Dichiaro gli elementi della pagina
const members_card_El = document.getElementById('members-cards')

//Salvo il template dello stile della card da inserire in una variabile


            
console.table(teamMembers)


//Con un FOR scorro all'interno del'array di oggetti
for (let i = 0; i < teamMembers.length; i++) {

    //creo una variabile di appoggio per il singolo membro del team (singolo oggetto dell'array)
    const member = teamMembers[i];
    
    //Destrutturo l'oggetto prendendomi i singoli valori e appoggiandomeli in una serie di variabili associate
    const {name,role,email,img} = member;

    //carico il murkup della singola card con le variabili già pronte in una variabile di lavoro
    const card_markup = `
            <div class="col-lg-4 col-md-6 col-sm-12 d-flex py-2">
                <div class="col-4">
                    <img class="img-fluid w-100" src="${img}" alt="Immagine membro">
                </div>
                <div class="col-8 bg-dark text-light px-3 py-2">
                    <h3> ${name} </h3>
                    <p> ${role} </p>
                    <span class="text-primary fs-6"> ${email} </span>
                </div>
            </div>
            `
    
    //Inserisco nella DOM la singola Card, all'interno dell'elemento selezionato, concatenando il codice precedente con Before End
    members_card_El.insertAdjacentHTML('beforeend',card_markup)            

    
}