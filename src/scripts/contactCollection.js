
// fetching data to post and to also get data to show on the main page.
const contactCollectionAPI= {
    getContacts:() => {
        return fetch("http://localhost:8088/contacts")
        .then(contacts => contacts.json())
        .then(parsedContacts=> console.log(parsedContacts))
    },
    postContacts:(obj) =>{
    return fetch("http://localhost:8088/contacts",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })}
}
export default contactCollectionAPI
