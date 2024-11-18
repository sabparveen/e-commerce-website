import { Box, Button, Card, Rating, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import ImageProdect1 from '../images/product-img-1.jpg';
import ImageProdect2 from '../images/product-img-2.jpg';
import ImageProdect3 from '../images/product-img-3.jpg';
import ImageProdect4 from '../images/product-img-4.jpg';


const prodectsDeta = [
  { id: 1, image: ImageProdect1, Productname: "Snack & Munchies", name: "Haldiram's Sev Bhujia", rating: 1, price: "$18" },
  { id: 2, image: ImageProdect2, Productname: "Bakery & Biscuits", name: "NutriChoice Digestive", rating: 3, price: "$24" },
  { id: 3, image: ImageProdect3, Productname: "Bakery & Biscuits", name: "Cadbury 5 Star Chocolate", rating: 5, price: "$32" },
  { id: 4, image: ImageProdect4, Productname: "Snack & Munchies", name: "Onion Flavour Potato", rating: 4, price: "$3" },

];

const ProdectsCard = () => {
  return (
    <Box className="d-flex gap-3 flex-wrap">
      {prodectsDeta?.map((product) => (
        <Card key={product.id} className="p-2 border border-primary" style={{ width: '18rem' }}>
          <img src={product?.image} alt="" style={{ width: '100%', height: 'auto' }} />
          <Typography variant="span">{product.Productname}</Typography>
          <Typography className='fw-bold' variant="h6">{product.name}</Typography>
          <Rating name="read-only" value={product.rating} readOnly />
          <Box className="d-flex justify-content-between align-items-center mt-3">
            <Typography>{product.price}</Typography>
            <Button size="small" variant="contained" color="primary">
              <AddIcon />
              Add
            </Button>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default ProdectsCard;
