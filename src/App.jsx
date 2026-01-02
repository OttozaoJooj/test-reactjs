import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Card from "./components/Card"
import { v4 } from 'uuid';
import { useState } from "react";

function App() {
  const showCard = true;
  let [posts, setPosts] = useState([
    {
      name: 'Post 1',
      img: 'https://conteudo.imguol.com.br/c/entretenimento/ff/2023/02/07/raio-relampago-chuva-1675792032541_v2_1x1.jpg',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia est voluptas magni, illum facere odit alias nostrum nesciunt molestias? Explicabo harum officiis tenetur fugit corporis expedita repellat. Quos, facilis omnis.',
      modalBody: 'modalBody1'
    },
    {
      name: 'Post 2',
      img: 'https://images.ecycle.com.br/wp-content/uploads/2021/05/18142206/raios-e-trovoes-hd.jpg',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia est voluptas magni, illum facere odit alias nostrum nesciunt molestias? Explicabo harum officiis tenetur fugit corporis expedita repellat. Quos, facilis omnis.',
      modalBody: 'modalBody2'

    },
    {
      name: 'Post 3',
      img: 'https://conhecimentocientifico.r7.com/wp-content/uploads/2019/12/raios-o-que-sao-como-se-formam-e-como-evitar-ser-atingido-por-um-raio-1.jpg',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia est voluptas magni, illum facere odit alias nostrum nesciunt molestias? Explicabo harum officiis tenetur fugit corporis expedita repellat. Quos, facilis omnis.',
      modalBody: 'modalBody3'

    }

  ]);


  return (
    <>
        { showCard ? (
          
          <div>
            <label htmlFor="text" className="form-label">Digite um texto:</label>
            <input type="text" name="text" className="form-control"/>
            <div className="container-fluid vh-100 d-flex align-items-center justify-content-center gap-5">
              {posts.map(function(post){
                let unique = v4();
                console.log(unique);
                return <Card key={unique} title={post.name} img={post.img} text={post.text}/>
                })}            
            </div>
          </div>
          ) : (
            <p>This is not card in here.</p>
          )
        }
    </>
  )
}

export default App
