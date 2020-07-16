import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "../screens/style";
import MenuCard from "../components/MenuCard";

const data = require("../menus.json");

function Home() {
  const classes = useStyles();

  return (
    <Grid container>
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
          {data.menus[0].items.map((item, index) => {
            return (
              <Grid item xs={5} sm={4} key={index}>
                <MenuCard
                  imageName={item.image}
                  path={"/select/" + index}
                  menuName={item.name}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
