import React, { Component } from "react";
import "./Quotes.css";
import bg from "./bg.mp4";

import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            quoteArr: [],
            quote: "Do not go gentle into that good night!",
            author: "Dr. Brand"
        };
    }
    render() {
        fetch(
            "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        )
            .then(res => res.json())
            .then(data => {
                this.setState({
                    quoteArr: data.quotes
                });
            });
        const hello = "";

        const changeQuote = () => {
            const arr = this.state.quoteArr;
            const ranNum = Math.floor(Math.random() * arr.length);
            console.log(arr[ranNum]);
            this.setState({
                quote: arr[ranNum].quote,
                author: arr[ranNum].author
            });
        };
        return (
            <div>
                <div className="body">
                    <video className="videoTag" autoPlay loop muted>
                        <source src={bg} type="video/mp4" />
                    </video>
                    <div className="container">
                        <div className="quote">
                            <h1>{this.state.quote}</h1>
                            <hr />
                            <p>- {this.state.author}</p>
                        </div>
                        <div className="share-quote">
                            <div>
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>

                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                            <button onClick={changeQuote}>Next Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
