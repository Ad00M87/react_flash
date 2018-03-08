import React from 'react';

class Card extends React.Component {
  state = {
    answerShowing: false,
  }

  flipCard = () => {
    this.setState({ answerShowing: !this.state.answerShowing })
  }

  render() {
    if (this.state.answerShowing) {
      return(
        <div style={styles.card}>
          <h1>Answer:</h1>
          <h4>{this.props.answer}</h4>
          <button onClick={this.flipCard}>Flip Card</button>
          <button>Edit Card</button>
          <button onClick={() => this.props.deleteCard(this.props.question)}>Delete Card</button>
        </div>
      )
    } else {
      return(
        <div style={styles.card}>
          <h1>Question:</h1>
          <h4>{this.props.question}</h4>
          <button onClick={this.flipCard}>Flip Card</button>
          <button>Edit Card</button>
          <button onClick={() => this.props.deleteCard(this.props.question)}>Delete Card</button>
        </div>
      )
    }
  }
}

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    padding: '10px',
    border: '2px solid black',
    borderRadius: '5px',
  }
}

export default Card;
