import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="satin shirt"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Satin Shirt
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Not rich enough to buy from us, you are Broke!
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Buy</Button>
                <Button size="small">Add to Cart</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;