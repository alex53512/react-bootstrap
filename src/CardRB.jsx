import { Container, Card, Button } from "react-bootstrap"

export default function CardRB(){

    return(

        <Container>
            <Card style={{width:"18rem"}}>

                <Card.Img variant="top"src="https://picsum.photos/300/200" ></Card.Img>
                <Card.Body>
                    <Card.Title>EJEMPLO</Card.Title>
                    <Card.Text>Ejemplo Card Bootstrap</Card.Text>
                    <Button variant="dark"> Aceptar</Button>
                </Card.Body>
            </Card>
        </Container>

    )

}