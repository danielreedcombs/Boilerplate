const name= document.querySelector("#name")
const address= document.querySelector("#addressEntry")
const phoneNumber= document.querySelector("#phoneNumber")
const submitButton= document.querySelector("#submitButton")
let obj={
    contactName: "",
    contactAddress:"",
    contactPhone:""
}
    function pullInformation(){
        obj.contactName=(name.value)
        obj.contactAddress=(address.value)
        obj.contactPhone=(phoneNumber.value)
        console.log(obj)
    }

