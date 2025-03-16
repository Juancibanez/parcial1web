import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FormattedMessage } from 'react-intl';

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
              <FormattedMessage id="details.year" /> {robot.añoFabricacion}
            </Card.Text>
            <Card.Text>
              <FormattedMessage id="details.capacity" /> {robot.capacidadProcesamiento}
            </Card.Text>
            <Card.Text>
              <FormattedMessage id="details.mood" /> {robot.humor}
            </Card.Text>
          </Card.Body>
        </Card>
      );
}

export default Detalle;