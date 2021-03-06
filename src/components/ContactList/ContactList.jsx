import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';
import ContactListStl from './ContactListItem/ContactListItem.module.css';

function ContactsList({ visibleContacts, onRemoveItem }) {
    // console.log(visibleContacts);
    return (
        <ul className={ContactListStl.contactList}>
            {visibleContacts.map(visibleContact => (
                <ContactListItem
                    contact={visibleContact}
                    onRemove={() => onRemoveItem(visibleContact.id)}
                    key={visibleContact.id}
                />
            ))}
        </ul>
    );
}

// Можно добавить`isRequired` к любому приведённому выше типу,
// чтобы показывать предупреждение,
// если проп не передан

ContactsList.propTypes = {
    visibleContacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ),

    onRemoveItem: PropTypes.func.isRequired,
};
export default ContactsList;
