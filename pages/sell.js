import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button } from "@material-ui/core";

import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const CREATE_ITEM_MUTATION = gql`
  mutation(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      tite: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
    justifyContent: "center"
  }
}));

const Sell = props => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image] = useState("Image URL");
  const [largeImage] = useState("Large Image URL");
  const [createItem, { loading, error }] = useMutation(CREATE_ITEM_MUTATION);
  const classes = useStyles();

  const createItemHandle = e => {
    e.preventDefault();
    console.log({ title, price, description, image, largeImage });
  };

  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item xs={12} sm={9} md={6}>
        <p>Sell</p>
        <form onSubmit={createItemHandle}>
          <TextField
            label="Title"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            label="Price"
            type="number"
            margin="normal"
            variant="outlined"
            fullWidth
            value={price}
            onChange={e => setPrice(+e.target.value)}
          />
          <TextField
            label="Description"
            multiline
            rowsMax="4"
            margin="normal"
            variant="outlined"
            fullWidth
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            ADD
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Sell;
