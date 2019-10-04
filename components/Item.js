import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Button,
  CardActions
} from "@material-ui/core";
import Link from "next/link";

export default ({ id, title, description, image }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} padding={2}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="140"
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Link
                href={{
                  pathname: "/items",
                  query: {
                    id
                  }
                }}
              >
                <a>{title}</a>
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Edit
          </Button>
          <Button size="small" color="primary">
            Add to cart
          </Button>
          <Button size="small" color="primary">
            delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
