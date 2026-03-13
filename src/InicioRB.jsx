import { Container} from "react-bootstrap"
import { Button } from "react-bootstrap"
export default function InicioRB(){

    return(

        <Container className="border rounded p-4">
            <h1 className="text-success"> React Bootstrap </h1>
            <Button variant="danger"> Aceptar </Button>
        </Container>

    )

}