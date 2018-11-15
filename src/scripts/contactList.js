import APIfunctions from "./contactCollection"
import contactDiv from "./Contact"
// functions imported to get contacts from the JSON and the
// createInformation function to inject it into the DOM
// Targeting the ID we will inject things into the DOM
let domEntry = document.querySelector("#submit")
function contactList(parsedContacts) {
    parsedContacts.forEach(contact =>{
        // creating each contact inside its new div
        let contactContents = contactDiv(contact)
        // sending the new div to the HTML thru its entry point
        domEntry.innerHTML+=contactContents
    })
}
// clearing the Dom each time we load the page
function clearContacts(){
    domEntry.innerHTML = ""
}
// the function that uses the functions prior to extract information from the Json.
// then take that information, and turning it into a Div and lastly injecting it into the DOM.
const contactListToDom = () => {
    clearContacts()
    APIfunctions.getContacts().then(parsedContacts => contactList(parsedContacts))
}
export default contactListToDom