// Function that creates the contact div for each persons infomormation, and attaches it to the DOM
function contactDiv(contact){
    // the layout of each contacts Div
    let contacts=
    `<div class="contact">
     <h1> ${contact.name} </h1>
     <p> ${contact.phoneNumber} </p>
     <p> ${contact.address} </p>
     </div>
     `
     // returns the contacts created
     return contacts
}
// us Exporting the contactDiv function into the Aether
export default contactDiv