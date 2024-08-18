import React from "react";
import "./project.css";
import "./index.css";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
// import Browser from "../Browser";
import Arrow from "../../assets/right-arrow.svg";
import Separator from "../Separator";
import { styles } from "./styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Project({
  projectName,
  projectRole,
  projectObj,
  projectBrowser,
  projectStack,
  projectDescription,
  location,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Toolbar
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            size="large"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>

        <div className="dialog">
          <h1 className="project-header-dialog">
            {projectName}
            <span className="dotColorTheme">.</span>
          </h1>
          <Separator
            style={{
              width: "100%",
              margin: "0",
              marginTop: "4vh",
              marginBottom: "2vh",
            }}
          />
          <section className="project-brief-dialog">
            Location <span className="dotColorTheme"> - </span> {location}{" "}
            <br />
            Role<span className="dotColorTheme"> - </span> {projectRole}
            <br />
          </section>
          <div style={styles.container}>
            <ul style={styles.list}>
              {projectDescription.map((item, index) => (
                <li key={index} className="listItem">
                  {/* <strong style={styles.title}>{item.title}:</strong>{" "} */}
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Dialog>

      <section className="project-info">
        <h2 className="project-header">
          {projectName}
          <span className="dotColorTheme">.</span>
          <div className="project-role">{projectRole}</div>
        </h2>
        <p className="project-objective">
          {projectObj}
          <button className="learn-more" onClick={handleClickOpen}>
            Learn more{" "}
            <img
              style={{
                height: "1em",
                width: "1em",
                marginLeft: "0.5em",
              }}
              src={Arrow}
              alt="Twilio"
            ></img>
          </button>
        </p>
      </section>
      <section className="project-details"></section>
    </>
  );
}

export default Project;
