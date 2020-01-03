import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class AboutHeroes extends Component{
   

    render(){
      return(
        <div className="App">
          <Link to="/">Voltar para a page inicial</Link>
        </div>
      );
    }
}

export default AboutHeroes;
