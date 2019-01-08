const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: '#fff',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  title: {
    color: '#616161'
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuItem: {
    color: '#cfd8dc'
  },
  drawerIcon: {
    marginRight: 20,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: '#455a64',
    width: drawerWidth,
    borderRight: 0
  },
  content: {
    flexGrow: 1,
    paddingTop: 0,
    padding: theme.spacing.unit * 3,
  },
});

export default styles