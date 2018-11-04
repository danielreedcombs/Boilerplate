import contentCollectionAPI from "./contactCollection"

const contactList={
    makeList: () => {contentCollectionAPI.getContacts()}
}
export default contactList