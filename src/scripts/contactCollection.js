
// fetching data to post and to also get data to show on the main page.

   const APIfunctions={
//    how we get the contacts from the JSon to manipulate in Javascript
    getContacts(){
        return fetch("http://localhost:8088/contacts")
        .then(contacts => contacts.json())
        .then(parsedContacts => parsedContacts)
    },
// how we are sending things into the JSON folder from user Input
    postContacts(obj){
        return fetch("http://localhost:8088/contacts",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })}
}
// exporting the API object that contains both the getContacts function that retrieves data from Json &
// the postContacts function that puts objects into the Json
export default APIfunctions