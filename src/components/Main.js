import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Carrito from "./Carrito"

const Main = ({onAdd,state}) => {
    return (
        <Container as="main" fluid>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
                <Route path="/producto/:idProducto" element={<ItemDetailContainer onAdd={onAdd} state={state} />} />
                <Route path="/carrito" element={<Carrito/>} />
            </Routes>
        </Container>
    );
}

export default Main;