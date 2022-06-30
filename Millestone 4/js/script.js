/*Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
vengono visualizzati solo i contatti il cui nome contiene 
le lettere inserite (es, Marco, Matteo Martina ->
Scrivo “mar” rimangono solo Marco e Martina)
*/

//Inizializzo Vue
var app= new Vue (
    {
        el:'#root',
        data:{
            //imposto le mie varibili flag
            currentActiveElement:0,
            newMessage:'',  
            userContactsName:'',
            access:dayjs().format('HH:mm:ss'),
                   
            //Dati array 
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'css/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'css/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'css/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: 'css/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        } 
                    ],  
                },
            ]
        },
        methods:{
            //Indicizzo il mio elemento attivo
            sameElement(index){
                this.currentActiveElement=index;
            },
            //imposto la funzione per inviare un nuovo messaggio
            //(aggiungere un nuovo elemento nell'array)
            //imposterò le condizioni di inserimento testo
            //creo il mio nuovo elemento
            addNewMessage(){
                if(this.newMessage.length > 0){
                    //creo il nuovo messaggio
                    const newMess = {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: this.newMessage,
                        status: 'sent'
                    }
                    this.contacts[this.currentActiveElement].messages.push(newMess);   
                    //risposta
                    //imposto la funzione per inviare un  messaggio di risposta dopo 1 secondo
                    //(aggiungere un nuovo elemento nell'array)
                    //creo il mio nuovo elemento
                    setTimeout(()=>{
                        const newMessPc = {
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            text: 'ok',
                            status: 'received'
                        }
                    this.contacts[this.currentActiveElement].messages.push(newMessPc);
                    },1000);
               }
                this.newMessage='';
            },
            //imposto la funzione per filtrare i nomi al mio inserimeto testo
            //Escludo la differenza tra maiuscole e minuscole
            filterNameContacts(){
                const userContacts= this.userContactsName.toLowerCase();
                // Verifico se il nome dato dall'utente
                // è contenuto nella proprietà name di ogni contact
                //imposto il ciclo forEach
                this.contacts.forEach((element )=> {
                    const elementName=element.name.toLowerCase();
                    //imposto le condizioni della visibilità
                    if(elementName.includes(userContacts)){
                        element.visible=true;
                    }else{
                        element.visible=false;
                    }
                });
            }
        }
    }
)