import React, { Component } from "react";
import Loading from "../Loading/Loading";
import styles from "./ShowQuote.module.css";
import QuotesServices from "../../Services/QuotesServices";

class ShowQuote extends Component {
  state = {
    loadOne: false,
    showQuote: false,
    quotes: null,
    quote: null,
    errorMessage: null,
  };

  getRandomQuote = () => {
    const quotes = this.state.quotes;
    const randomNumber = parseInt(Math.random() * quotes.length);
    const quote = quotes[randomNumber];
    this.changeBackground();
    this.setState({
      loadOne: !this.state.loadOne,
      showQuote: true,
      quote: quote,
    });
  };

  changeBackground = () => {
    const colours = ["#add8e6", "#90ee90", "#FFCCFF", "#FFCCCC", "#FFFFCC"];
    const randomNumber = parseInt(Math.random() * colours.length);
    document.body.style = "background: " + colours[randomNumber];
  };

  componentDidMount() {
    QuotesServices.getQuotes()
      .then((res) => this.setState({ quotes: res }))
      .catch((err) => this.setState({ quotes: [], errorMessage: err.message }));
  }

  render() {
    return this.state.quotes === null ? (
      <Loading />
    ) : this.state.errorMessage === null ? (
      <div>
        <div className={styles.container}>
          {!this.state.showQuote ? (
            <div className={styles.title}>Want an inspirational quote?</div>
          ) : (
            <div id="quotesOne" className={styles.two}>
              <div className={styles.quote}>{this.state.quote.text}</div>
              <div className={styles.author}>{this.state.quote.author}</div>
            </div>
          )}
          <button
            className={styles.showButton}
            onClick={() => {
              this.getRandomQuote();
            }}
          >
            Click me!
          </button>
        </div>
        <footer className={styles.footer}>
          <label>
            Visit the github repo for the source code: &nbsp;
            <a href="https://github.com/Rhaelzo/inspirational-quotes-spa">
              inspirational-quotes-spa
            </a>
          </label>
        </footer>
      </div>
    ) : (
      <div>
        <div className={styles.title}>Sorry, we encountered an error! :(</div>
        <div className={styles.author}>{this.state.errorMessage}</div>
      </div>
    );
  }
}

export default ShowQuote;
