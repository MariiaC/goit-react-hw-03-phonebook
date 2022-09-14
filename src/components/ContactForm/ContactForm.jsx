import PropTypes from 'prop-types';
import { Component } from 'react';
//іконки та стилі
import { FiPlus } from 'react-icons/fi';
import s from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  //беремо з інпут та оновл стейт
  handleChange = evt => {
    const { value, name } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  // прокидуємо з форми пропси в ап
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };


  // резет інпут форми
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  
//рендерим
  render() {
    const { name, number } = this.state;
    return (
      <form className={s.contactForm} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={s.button}>
          
          <FiPlus style={{ color: 'green', paddingRight: 10, fontSize:18 }} />
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};