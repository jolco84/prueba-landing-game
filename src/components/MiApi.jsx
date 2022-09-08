import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

function MiApi() {

  const [info, setInfo] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [sort, setSort] = useState("");

  /** Funcion para obtener resultados de la API  **/
  const consumirApi = () => {
    //doc api: https://www.freetogame.com/api-doc
    // doc soporte cors https://rapidapi.com/digiwalls/api/free-to-play-games-database

    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    fetch(url, {
      headers: {
        'X-RapidAPI-Key': 'c44de1b5d1msha3eecd09822e777p13aae4jsn2eea6e106256',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    })
      .then((response) => response.json())
      .then((data) => setInfo(data));

  };
  /**LLamamos al función que consume la API al momento de montar el componente */
  useEffect(() => {
    consumirApi();
  }, []);

  /** Setear valor del input busqueda */
  const buscarGame = (e) => {
    setFiltro(e.target.value)

  }
  /** Filtrar array info obtenedio del consumo de la API apartir del input busqueda */
  const filtrar = !filtro
    ? info
    : info.filter((lista) =>
      lista.title.toLowerCase().includes(filtro.toLowerCase()))


  /** Setear valor del ordenamiento que se desea realizar */
  const sortAZ = (e) => {
    setSort(e);

  }
  /**Ordenar array segun lo seleccionado  */
  const filtrarSort = !sort
    ? filtrar
    : sort === 'az' ?
      filtrar.sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0))
      : sort === 'za' ?
      filtrar.sort((a, b) => ( b.title >a.title ? 1 :  b.title < a.title  ? -1 : 0))

      : sort === 'fecha' ?
        filtrar.sort((a, b) => (b.release_date > a.release_date ? 1 : b.release_date < a.release_date ? -1 : 0))
        : filtrar



  return (
    <>
      {/* Input de Busqueda */}
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Busqueda por nombre"
          className="me-2"
          aria-label="Search"
          onChange={buscarGame}
        />
        <Button variant="outline-warning">Buscar</Button>
      </Form>

      {/* Ordenar Juegos */}
      <Dropdown onSelect={sortAZ}>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          Ordenar por
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="az" >Alfabeticamente (A-Z)</Dropdown.Item>
          <Dropdown.Item eventKey="za" >Alfabeticamente (Z-A)</Dropdown.Item>
          <Dropdown.Item eventKey="fecha" >Ultimo lanzamiento</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Muestra resultados de API, mapea solo una cantidad del total */}
      <CardGroup>
        {filtrar === "" && sort === "" ?
          info.map((item) => (

            <Card key={item.id}  >
              <Card.Img variant="top" src={item.thumbnail} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.short_description}
                </Card.Text>
                <h5>Fecha Ultimo Release:</h5>
                <Card.Text>
                  {item.release_date}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">URL: <a href={item.game_url}>{item.game_url}</a></small>
              </Card.Footer>
            </Card>

          )) :
          filtrar.map((item) => (

            <Card key={item.id} >
              <Card.Img variant="top" src={item.thumbnail} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.short_description}
                </Card.Text>
                <h5>Fecha Ultimo Release:</h5>
                <Card.Text>
                  {item.release_date}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">URL: <a href={item.game_url}>{item.game_url}</a></small>
              </Card.Footer>
            </Card>

          ))
        }
      </CardGroup>

    </>
  );
}



export default MiApi;