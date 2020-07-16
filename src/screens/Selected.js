import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "../screens/style";
import MenuCard from "../components/MenuCard";

const data = require("../menus.json");

const Selected = ({ match }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={4} direction="row">
      <Grid item container className={classes.root}>
        <Grid item xs={1} sm={1}></Grid>
        <Grid
          item
          container
          xs={10}
          sm={10}
          direction="row"
          spacing={6}
          justify="center"
        >
          {match.params.name === "0"
            ? data.menus[0].items[0].items.map((item, index) => {
                return (
                  <Grid item xs={5} sm={4} key={index}>
                    <MenuCard
                      imageName={item.image}
                      path={"/select/" + match.params.name + "/" + index}
                      menuName={item.name}
                      price={item.price}
                    />
                  </Grid>
                );
              })
            : data.menus[0].items[match.params.name].items.map(
                (item, index) => {
                  return (
                    <Grid item xs={5} sm={4} key={index}>
                      <MenuCard
                        imageName={item.image}
                        path={"1"}
                        menuName={item.name}
                        price={item.price}
                        control={"select"}
                      />
                    </Grid>
                  );
                }
              )}
        </Grid>
        <Grid item xs={1} sm={1}></Grid>
      </Grid>
    </Grid>
  );
};

export default Selected;
