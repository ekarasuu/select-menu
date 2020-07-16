import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import { useHistory } from "react-router-dom";
import { useStyles } from "../screens/style";

export default function MenuCard({
  imageName,
  menuName,
  path,
  price,
  control,
}) {
  let history = useHistory();
  const classes = useStyles();
  const [add, setAdd] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const pressFunc = () => {
    if (control === "select") {
      setAdd(price + " TL'ye " + menuName + " seçtiniz");
      setOpen(true);
    }
    if (control === "submenu") {
      setAdd(
        price === undefined
          ? menuName + " adisyona eklendi"
          : price + "TL farkla " + menuName + " adisyona eklendi"
      );
      setOpen(true);
    }
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={add}
      />
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={require("" + imageName)}
            title="Menü seçmek için tıklayınız.."
          />
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => (path !== "1" ? history.push(path) : pressFunc())}
            fullWidth
            size="small"
            color="primary"
          >
            {menuName}
          </Button>
          <Grid item xs={3}>
            <div className={classes.text}>{price}</div>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}
