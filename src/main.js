import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import { SupportTicket } from './SupportTicket'

let tickets = [new SupportTicket("Kovács Péter", "Fiók nem műkszik :(", "Magas", new Date(2025, 11, 25, 10, 0, 0)),
  new SupportTicket("Nagy Anna", "Elfelejtett jelszó", "Közepes", new Date(2025, 11, 25, 11, 30, 0)),
  new SupportTicket("Tórh Bence", "Weboldal lassú", "Alacsony", new Date(2025, 11, 24, 9, 15, 0)),
  new SupportTicket("Horváth Bence", "Hibás fizetés", "Magas", new Date(2025, 11, 23, 15, 0, 0)),
  new SupportTicket("Szabó Gábor", "Értesítések nem jönnek", "Közepes", new Date(2025, 11, 22, 8, 45, 0))
];

function displayTickets() {
  const ticketDiv = document.getElementById("tickets");
  tickets.forEach(element => {
    console.log(element.toString());
    const p = document.createElement("p");
    p.textContent = element.toString();
    p.classList.add("ticket");
    switch (element.priority) {
      case "Alacsony":
        p.style.backgroundColor = "green";
        break;
      case "Közepes":
        p.style.backgroundColor = "yellow"; break;
      case "Magas":
        p.style.backgroundColor = "red"; break;
      default:
        break;
    }
    ticketDiv.appendChild(p);
  })
}

document.addEventListener("DOMContentLoaded", () => {
  displayTickets();
});