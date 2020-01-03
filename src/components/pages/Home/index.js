import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Home.css'



class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      filmes: []
    };

    this.showMovies = this.showMovies.bind(this);
  }

  componentDidMount(){
    this.showMovies();

  }
  showMovies(){
    let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
    fetch(url)
    .then((r) => r.json())
    .then((json) => {
      this.setState({ filmes: json});
      console.log(json)
    })
  }

    render(){
      return(
        <div className="main">
          <h1>Escolha seu filme</h1>
            {this.state.filmes.map((filme) => {
              return(
              <div className='cards-img' key={filme.id}>
                <p>{filme.nome}</p>
                <img src={filme.foto} alt='imagem do filme'/>
                <Link to="/AboutHeroes">Acessar</Link>
              </div>

              )
            })}
        </div>
      );
    }
}

export default Home;
