import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditModal from "./EditModal";
import ImageIcon from "@material-ui/icons/Image";
import DeleteImage from "./DeleteImage";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    maxWidth: 345,
    margin: "20px 0",
  },
  media: {
    height: 0,
    paddingTop: "59.9%",
    backgroundPosition: "top",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));

export default function SingleArtworkCard({ ...props }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {
    imageUrl,
    title,
    description,
    originalFileTitle,
    timeStamp,
    creationDate,
  } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <ImageIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={`Created At: ${moment(creationDate).format("MMM YYYY, Do")}`}
      />
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title={title}
        media="picture"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          display="block"
        >
          {description ? description : "Please add some descriptions"}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <EditModal {...props} />
        <DeleteImage {...props} />
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Metadata</Typography>
          <Typography>{`Upload Date: 
          ${moment(timeStamp)}`}</Typography>
          <Typography>{`Title: 
          ${originalFileTitle}`}</Typography>
          <Typography
            style={{ textDecoration: "none", marginTop: "10px" }}
            download={originalFileTitle}
            href={imageUrl}
            title={title}
          >
            <Button variant="outlined">Download This Image</Button>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
