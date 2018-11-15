import createInformation from "./contactForm"
import contactListToDom from "./contactList"
// Things we need to inject and pull into the ^^
// Just checking to make sure we can see the JS main^^
const submitButton= document.querySelector("#submitButton")
// targeting the submit button^^
contactListToDom()
// displaying contactlist to the dom^^
submitButton.addEventListener("click",()=>{
    createInformation()})