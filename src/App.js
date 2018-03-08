import React, { Component } from 'react';
import Form from './Form';
import Card from './Card';


class App extends Component {
  state = {
    cards: [],
  }

  addCard = (card) => {
    const { cards } = this.state;
    this.setState({ cards: [card, ...cards]})
  }

  deleteCard = (question) => {
    debugger
    const { cards } = this.state;
    let newArr = cards.filter( card => {
      return card.question != question
    })
    this.setState({ cards: newArr })
  }

  render() {
    return (
      <div style={styles.container}>
        <h1>React Flash Cards</h1>
        <Form addCard={this.addCard} />
        <div style={styles.cardContainer}>
          {this.state.cards.map( (card, i) => {
            return(
              <Card
                question={card.question}
                answer={card.answer}
                id={i}
                deleteCard={this.deleteCard}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#10a7e8',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1200px',
    flexWrap: 'wrap',
  },
}

export default App;
