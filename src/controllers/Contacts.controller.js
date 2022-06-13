const {addContactDb, getContactsDb, deleteContactDb} = require('../models/Contacts.model');

function getContacts(user_id){
    return getContactsDb(user_id)
}

function addContact(res, req){
    if(req.body.contact_name !== '' || undefined && req.body.contact_phone.length === 9) {
        addContactDb(res, req.session.user.id, req.body.contact_name, req.body.contact_phone, req.body.contact_description);
    }else{
        res.json({error: 'Introduce well the fields'})
    }
}

function deleteContact(req) {
    if (req.session.user && req.params.id){
        deleteContactDb(req.params.id, req.session.user.id);
    }else{
        console.log('Something was bad');
    }
}

module.exports = {
    getContacts,
    addContact,
    deleteContact 
};