import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const history = useHistory()
    const handleRouteChange = () => {
        history.push(`/PrivateRoute/${_id}`);
    }

    const {_id, name, price, weight,imageURL} = props.product;
    
    return (
        <div className="col-md-3">
            <Card>
            <Card.Img variant="top" style={{height: '300px'}} src={imageURL} />
            <Card.Body>
                <div >
                    <div className="text-center">
                        <Card.Title>{name}</Card.Title>
                        </div>
                        <div className="text-center bg-warning">
                        <p><b>${price}</b></p>
                        </div>
                    
                    {/* <Button as={Link}  to={`/movie/${id}`} variant="primary">View Details</Button> */}
                    <Link to="Checkout"><Button onClick={handleRouteChange} variant="primary">Buy Now</Button> </Link>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Product;