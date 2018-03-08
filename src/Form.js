import React from 'react';

class Form extends React.Component {
  state = {
    question: "",
    answer: ""
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let card = { question: this.state.question, answer: this.state.answer }
    this.props.addCard(card)
    this.setState({ question: '', answer: ''})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name="question"
          value={this.state.question}
          required
          placeholder="Add an Question"
          onChange={this.handleChange}
        />
        <input
          name="answer"
          value={this.state.answer}
          required
          placeholder="Add an Answer"
          onChange={this.handleChange}
        />
        <button type="submit">Go</button>
      </form>
    )
  }
}

export default Form;
