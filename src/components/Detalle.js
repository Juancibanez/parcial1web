import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function Detalle({id}) {

    const APIURL = 'http://localhost:3001';

    const [robot, setRobot] = useState({});



    async function getRobot() {
        const response = await fetch(`${APIURL}/robots/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        return data
    }

    useEffect(() => {
        getRobot()
        .then(data => {
            setRobot(data);
        })
    }, [id]);

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={robot.imagen} />
          <Card.Body>
            <Card.Title>{robot.nombre}</Card.Title>
            <Card.Text>
              Año de fabricacion: {robot.añoFabricacion}
            </Card.Text>
            <Card.Text>
              Capacidad de Procesamiento: {robot.capacidadProcesamiento}
            </Card.Text>
            <Card.Text>
              Humor: {robot.humor}
            </Card.Text>
          </Card.Body>
        </Card>
      );
}

export default Detalle;