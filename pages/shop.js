import React from "react";
import Item from "../components/Item";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const ALL_ITEMS_QUERY = gql`
  query {
    items {
      id
      title
      description
      image
      largeImage
      price
    }
  }
`;

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2)
  }
}));

const Shop = props => {
  const classes = useStyles();

  const { data, error, loading } = useQuery(ALL_ITEMS_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  console.log(data.items);
  return (
    <Grid container className={classes.container} spacing={2}>
      {data.items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </Grid>
  );
};

export default Shop;
