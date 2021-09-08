import React, {Component} from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "Life of Pi", author: "Yann Martel"},
            {title: "Mrs. Dalloway", author: "Virginia Woolf"},
            {title: "The Bell Jar", author: "Sylvia Plath"},
            {title: "Frankenstein", author: "Mary Shelley"},
            {title: "War and Peace", author: "Leo Tolstoy"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row">
                    <div className="col-md-4">
                        {/*Button here to move to the previous book viewed*/}
                    </div>
                    <div className="col-md-4">
                        {/*Display book with cover here*/}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className="col-md-4">
                        {/*Button here to move to the next book*/}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App;