import contactCollection from "./contactCollection"

const submitButton= document.querySelector("#submitButton")
const createContact={
contactMachine: function pullInformation(){
            const name= document.querySelector("#name")
            const address= document.querySelector("#addressEntry")
            const phoneNumber= document.querySelector("#phoneNumber")
            let obj={
                contactName: "",
                contactAddress:"",
                contactPhone:""
            }
            obj.contactName=(name.value)
            obj.contactAddress=(address.value)
            obj.contactPhone=(phoneNumber.value)
            contactCollection.putContacts(obj)
        }

    
    
        
    
        const submitButton= document.querySelector("#submitButton")
submitButton.addEventListener("click", ()=>{
    createContact.pullInformation()

})
export default createContact