import React from "react"


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      quantity: "",
      currency: "RUB",
      price: ""
    };
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState( { [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddingProduct(this.state);
    this.setState({
      name: "",
      quantity: "",
      currency: "RUB",
      price: ""
    });
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>

          <div className="form-group name">
            <label htmlFor="name">Название продукта</label>
            <input className="form-control"
                   type="text"
                   name="name"
                   id="name"
                   value={this.state.name}
                   onChange={this.handleChange}
            />
          </div>

          <div className="form-group quantity">
            <label htmlFor="quantity">Количество</label>
            <input className="form-control"
                   type="number"
                   name="quantity"
                   id="quantity"
                   value={this.state.quantity}
                   onChange={this.handleChange}
            />
          </div>

          <div className="form-group currency">
            <label htmlFor="currency">Валюта</label>
            <select className="form-control"
                    name="currency"
                    id="currency"
                    value={this.state.currency}
                    onChange={this.handleChange}
            >
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>

          <div className="form-group price">
            <label htmlFor="price">Цена</label>
            <input className="form-control"
                   type="text"
                   name="price"
                   id="price"
                   value={this.state.price}
                   onChange={this.handleChange}
            />
          </div>

          <button className="btn btn-primary" type="submit">Добавить</button>
        </form>
    );
  }
}

export default Form
