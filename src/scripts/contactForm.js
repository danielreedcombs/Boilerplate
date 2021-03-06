import APIfunctions from "./contactCollection"
// functions pulled from other pages
function createInformation() {
    // where we are targeting to get the values for the name address and phone number for our
    // object to go to the API
    const name = document.querySelector("#name")
    const address = document.querySelector("#addressEntry")
    const phoneNumber = document.querySelector("#phoneNumber")
    // an empty Object for us to fill putting into the API
    let obj = {
        name: "",
        address: "",
        phoneNumber: ""
    }
    // Filling the object with things we targeted
    obj.name = (name.value)
    obj.address = (address.value)
    obj.phoneNumber = (phoneNumber.value)
    // sending the object to the JSON with the POST function we made in contactCollection
    APIfunctions.postContacts(obj)
    .then(() => {
        location.reload()
    })
}
// sending out the createInformation Function
export default createInformation
