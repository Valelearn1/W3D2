/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

const lista = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");

function aggiungiTask(testo, priorita, eliminaTesto = "Elimina") {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const id = Date.now();
  const data = document.createElement("span");
  const elimina = document.createElement("button");

  li.textContent = testo;
  span.textContent = priorita;
  data.textContent = new Date().toLocaleString();
  elimina.textContent = eliminaTesto;

  li.classList.add(`priorita-${priorita}`);
  span.classList.add("badge");
  data.classList.add("data");
  elimina.classList.add("bottone-aggiungi");

  li.appendChild(span);
  li.appendChild(data);
  li.appendChild(elimina);
  lista.appendChild(li);

  aggiornaContatore();
}

function aggiornaContatore() {
  const tasks = lista.querySelectorAll("li");
  contatore.textContent = tasks.length;
}

aggiungiTask("Sistemare casa", "media");
aggiungiTask("Studiare JavaScript", "alta");
aggiungiTask("Farsi un caffè", "bassa");
aggiungiTask("Prenotare visita medica", "alta");
aggiungiTask("Riposarsi", "bassa");

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/
