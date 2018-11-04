import contactCollectionAPI from "./contactCollection"

// creates a object based on users input and sends it to the json folder.
const createContact= function createInformation(){
            const name= document.querySelector("#name")
            const address= document.querySelector("#addressEntry")
            const phoneNumber= document.querySelector("#phoneNumber")
            let obj={
                name: "",
                address:"",
                phoneNumber:""
            }
            obj.name=(name.value)
            obj.address=(address.value)
            obj.phoneNumber=(phoneNumber.value)
            contactCollectionAPI.postContacts(obj)
        }
export default createContact