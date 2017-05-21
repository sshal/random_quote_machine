import React from 'react';

class Machine extends React.Component {
  constructor (props) {
    super(props);
    this.generateQuote = this.generateQuote.bind(this);
    this.quote = "Click the button";
    this.author = "";
    this.tweet = "";
  }
  generateQuote() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var result = JSON.parse(xmlhttp.response);
            this.quote = result.quote;
            this.author = result.author;
            this.tweet = `"${this.quote}" ${this.author}`;
            this.setState({});
        }
    }.bind(this);
    xmlhttp.open("POST", "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("X-Mashape-Key", "opBQ5gr4BAmsh4jyZgwSkckTYIBNp1bPRw3jsnxn81PvkuHAI1");
    xmlhttp.setRequestHeader("Accept", "application/json");
    xmlhttp.send();
  }
  render () {
    return (
      <div className="board">
          <p className="quote">{"\"" + this.quote +"\""}</p>
          <p className="author">{this.author}</p>
          <button><a className="twitter-share-button twit" href={"https://twitter.com/intent/tweet?text=" + this.tweet} target="_blank"><img src="https://image.ibb.co/buhydF/3.png" alt="tweet-icon" /></a></button>
          <button className="start" onClick={this.generateQuote}>Quote</button>
      </div>
    )}
}

module.exports = Machine;
