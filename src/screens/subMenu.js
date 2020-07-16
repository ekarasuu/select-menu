import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "../screens/style";
import MenuCard from "../components/MenuCard";

const data = require("../menus.json");

const keyList = (key) => {
  return data.menus.find((item) => item.key === key);
};

const SubMenu = ({ match }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item container className={classes.root}>
        <Grid item xs={1} sm={1}></Grid>
        <Grid item container xs={10} sm={10}>
          {data.menus[0].items[match.params.name].items[match.params.index]
            .subMenus !== undefined ? (
            data.menus[0].items[match.params.name].items[
              match.params.index
            ].subMenus.map((item, index) => {
              return (
                <Grid
                  item
                  container
                  justify="center"
                  xs={12}
                  sm={12}
                  key={index}
                >
                  <Grid
                    item
                    container
                    justify="center"
                    xs={12}
                    sm={12}
                    className={classes.root}
                  >
                    <div className={classes.title}>
                      <div>{keyList(item).orderTag}</div>
                      <div>{keyList(item).description}</div>
                    </div>
                  </Grid>
                  <Grid
                    justify="center"
                    item
                    container
                    direction="row"
                    className={classes.root}
                    spacing={3}
                  >
                    {keyList(item).items.map((item, index) => {
                      return (
                        <Grid item xs={5} sm={4} key={index}>
                          <MenuCard
                            imageName={item.image}
                            path={"1"}
                            menuName={item.name}
                            price={item.price}
                            control={"submenu"}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              );
            })
          ) : (
            <MenuCard
              imageName={
                data.menus[0].items[match.params.name].items[match.params.index]
                  .image
              }
              control={"select"}
              path={"1"}
              menuName={
                data.menus[0].items[match.params.name].items[match.params.index]
                  .name
              }
              price={
                data.menus[0].items[match.params.name].items[match.params.index]
                  .price
              }
            />
          )}
        </Grid>
        <Grid item xs={1} sm={1}></Grid>
      </Grid>
    </Grid>
  );
};

export default SubMenu;
