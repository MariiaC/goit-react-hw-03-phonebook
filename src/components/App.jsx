import { Component } from 'react';
import { nanoid } from 'nanoid'; //бібл в умові
import { ContactForm } from './ContactForm';
//import { ContactItem } from './Contacts';
import { ContactList } from './Contacts';
import { Filter } from './Filter'
import s from './App.module.css';//загальний контейнер-дів


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // в state зберіг крнтакт юзера
  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const contact = {
      id: nanoid(),
      name,
      number,
    };


    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} already exists`);
      return;
    }
    this.setState(preState => ({
      contacts: [contact, ...preState.contacts],
    }));
  };

  // пошук конт
  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  // видалення конт
  deleteContact = contactItemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactItemId
      ),
    }));
  };

  //рендерим

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();
    const visibleFilterContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );

    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={visibleFilterContacts}
          handleDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}