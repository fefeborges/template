import { Card, CardActions, CardContent, CardMedia, Typography, Button, Link, Grid } from "@mui/material"

function Produto(props) {
  return (
    <Grid item lg={2} md={3} xs={8}>
        <Card sx={{ minHeight: '500px', height: '500px' }} key={props.key}>
            <CardMedia 
                sx={{ height: 300 }}
                image={props.imagem}
                title={props.titulo}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.descricao}
                </Typography>
                <Typography>
                    {props.preco}
                </Typography>
                <Typography>
                    {props.categoria}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large">
                    <Link href={ "editar/produto/" + props.id }>Editar</Link>
                </Button>
                <Button size="large">
                    <Link href="#" onClick={props.excluir}>Excluir</Link>
                </Button>
            </CardActions>
        </Card>
    </Grid>
  )
}

export default Produto