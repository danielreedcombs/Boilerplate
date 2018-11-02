

const contactCollectionAPI= {
    getContacts:() => {
        return fetch("http://localhost:8088/contacts")
        .then(contacts => contacts.json())
        .then(parsedContacts => {
          console.log(parsedContacts)
        })
    },
    putContacts:() =>{
    return fetch("http://localhost:8088/contacts")
    .then(contacts => contacts.json())
    .then(parsedContacts => {
      console.log(parsedContacts)
    })
}
}

// const nameDisplay= document.querySelector("#nameDisplay")
// nameDisplay.push(contentCollectionAPI.getContacts()

export default contactCollectionAPI
