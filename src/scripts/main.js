// import sayHello from "./Contact"
import contactList from "./contactList";
import createContact from "./contactForm"
// Event listner to send data to the database.json
contactList.makeList()
const submitButton= document.querySelector("#submitButton")
submitButton.addEventListener("click", ()=>{
    createContact()
    contactList.makeList()
    location.reload()
})
// displays the list  on page