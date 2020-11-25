import {
  AppBar as MuiAppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { createStyles, Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import {
  Dashboard as DashboardIcon,
  Description as DescriptionIcon,
  Build as BuildIcon,
  Menu,
} from "@material-ui/icons";
import clsx from "clsx";
import React, { FC } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { withRoot } from "./withRoot";
import Routes from "./Routes";

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    user: {
      flexGrow: 1,
      textAlign: "right",
    },
  })
);

function AppBar(props: {
  drawerOpen: boolean;
  handleDrawerToggle: () => void;
}) {
  const classes = useStyles();
  const { drawerOpen, handleDrawerToggle } = props;
  return (
    <MuiAppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerOpen,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          className={clsx(classes.menuButton)}
        >
          <Menu />
        </IconButton>
        <Typography className={classes.user}>
          demo@landlordstudio.com
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}

function AppDrawer(props: { drawerOpen: boolean }) {
  const classes = useStyles();
  const { drawerOpen } = props;
  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <List>
            <ListItem key="Logo">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Tentant Studio" />
            </ListItem>
          </List>
        </div>
        <Divider />

        <List>
          <ListItem
            button
            key="Dashboard"
            component={NavLink}
            to="/dashboard"
            activeClassName="Mui-selected"
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>
        <List>
          <ListItem
            button
            key="YourDocuments"
            component={NavLink}
            to="/your-documents"
            activeClassName="Mui-selected"
          >
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Your Documents" />
          </ListItem>
        </List>
        <List>
          <ListItem
            button
            key="RequestMaintenance"
            component={NavLink}
            to="/request-maintenance"
            activeClassName="Mui-selected"
          >
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Request Maintenance" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

const App: FC = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          drawerOpen={drawerOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <AppDrawer drawerOpen={drawerOpen} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: drawerOpen,
          })}
        >
          <div className={classes.drawerHeader} />
          <Routes />
        </main>
      </div>
    </Router>
  );
};

export default withRoot(App);
