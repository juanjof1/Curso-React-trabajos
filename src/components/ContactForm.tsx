import React from "react";

interface ContactState {
  name: string;
  email: string;
  phone: string;
  type: number;
}

export class ContactForm extends React.Component<{}, ContactState> {
  state: ContactState = {
    name: "",
    email: "",
    phone: "",
    type: 0
  };
  handleSubmit = () => {};

  handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(`input`, name, value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            name={"name"}
            type="text"
            required
            minLength={3}
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            name={"email"}
            type="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={this.handleChange}
          />
          <label>Phone</label>
          <input
            name={"phone"}
            type="tel"
            pattern="[0-9]{4}-[0-9]{4}"
            required
            onChange={this.handleChange}
          />
          <select name="type" onChange={this.handleChange}>
            <option value={1}> Opcion 1</option>
            <option value={2}> Opcion 2</option>
            <option value={3}> Opcion 3</option>
          </select>
        </form>
      </div>
    );
  }
}
