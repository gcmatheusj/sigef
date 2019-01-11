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
    color: '#fff'
  },
  drawerIcon: {
    marginRight: 20,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: '#8bc34a',
    width: drawerWidth,
    borderRight: 0
  },
  content: {
    flexGrow: 1,
    paddingTop: 0,
    padding: theme.spacing.unit * 3,
  },
  wrapperAvatar: { 
    height: 150, 
    backgroundColor: '#5a9216' 
  },
  avatar: { 
    height: 100, 
    width: 100, 
    backgroundColor: '#5a9216' 
  },
  face: { 
    width: 100, 
    height: 100, 
    color: '#fff' 
  },
});

export default styles