import Layout from '../components/Layout';

const Projects = (props) => (
  <Layout>
    <div className="projectTiles">
      <div className='container'>
          <br />
        <h2 className='sectionHeading'>Projects</h2>
      </div>
      <hr />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="cardBody card">
              <h4 className="card-header">iTunes-Search</h4>
              <img className="card-img-top bg-light" src="../static/iTunes.png" alt="Card image cap" />
              <div className="card-body bg-secondary">
                
                <a href="" className="btn btn-primary" target="_blank">
                <i className="fab fa-github"></i></a>&nbsp;
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="cardBody card">
              <h4 className="card-header">Weather App</h4>
              <img className="card-img-top bg-light" src="../static/WeatherApp.png" alt="Card image cap" />
              <div className="card-body bg-secondary">
              
                <a href="" className="btn btn-primary" target="_blank">
                <i className="fab fa-github"></i></a>&nbsp;
                
              </div>
            </div>
          </div>
         
          <div className="col-sm">
            <div className="cardBody card">
              <h4 className="card-header">Minesweeper Game</h4>
              <img className="card-img-top bg-light" src="../static/Minesweeper.png" alt="Card image cap" />
              <div className="card-body bg-secondary">
                
                <a href="" className="btn btn-primary" target="_blank">
                <i className="fab fa-github"></i></a>&nbsp;
                <a href="" target="_blank" className="btn btn-primary">
                <i className="fab fa-chrome"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="cardBody card mb-3">
              <h4 className="card-header">To Do List</h4>
              <img className="card-img-top bg-light" src="../static/TodoList.png" alt="Card image cap" />
              <div className="card-body bg-secondary">
                
                <a href="" className="btn btn-primary" target="_blank">
                <i className="fab fa-github"></i></a>&nbsp;
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="cardBody card mb-3">
              <h4 className="card-header">Projects Database</h4>
              <img className="card-img-top bg-light" src="../static/ProjectDB.png" alt="Card image cap" />
              <div className="card-body bg-secondary">
               
                <a href="" className="btn btn-primary" target="_blank">
                <i className="fab fa-github"></i></a>&nbsp;
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="cardBody card mb-3">
              <h4 className="card-header">Car Database</h4>
              <img className="card-img-top bg-light" src="../static/CarDatabase.png" alt="Card image cap" />
              <div className="card-body bg-secondary">
                <a href="" className="btn btn-primary" target="_blank">
                <i className="fab fa-github"></i></a>&nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
      
    .projectTiles {
      padding-bottom: 4rem;
      text-align: center;  
    }
    .sectionHeading {
        padding-top: 30px;
        font-size: 5rem;
        font-weight: bolder;
        color: white; 
      }

    hr {
        border-top: 5px solid white;
        width: 60%;
        margin: auto;
    }

    container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      max-width: 960px;
    }
    img {
      height: 250px
    }
    .fab {
      font-size: 28px;
      color: black;
    }
    .col-sm {
      padding-bottom: 1rem;
    }
    .cardBody {
      background: black;
      color: white;
      font-weight: bold;
    }
    .card-header {
      text-align: center
      font-size: 22px;
    }

    .card-body {
      text-align: center;
      font-size: 20px;
    }
    
  `}</style>
    </div>
  </Layout>
);

export default Projects;