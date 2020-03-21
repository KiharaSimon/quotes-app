import React, { Component } from 'react'
import axio from 'axios';
import './ZenQuotes.css';

class ZenQuotes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quotes: "",
            isLoaded:false
        }
    }
    componentDidMount(){
        axio.get('https://api.github.com/zen').then(response => {
            setTimeout(
                function(){
                    this.setState({
                        quotes:response.data,
                        isLoaded: true
                    })
                }.bind(this),
                3000

            );
            
        })
    }

    render() {
        return (
            <div>
                {this.state.isLoaded ? (<div>
                    <hi>Follow this:</hi>
                    <p>{this.state.quotes}</p>
                </div>) : (
                   <div className= 'loader'>
                       </div>
                )}
              
                
            
                
            </div>
               
        );
    }
}

export default ZenQuotes