/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 20,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: "Home",
      expanded: false
    };
  }
  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };
  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title={this.state.title}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div style={styles.container}>
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
              <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                actAsExpander
                showExpandableButton
              />
              <CardText>
                <Toggle
                  toggled={this.state.expanded}
                  onToggle={this.handleToggle}
                  labelPosition="right"
                  label="This toggle controls the expanded state of the component."
                />
              </CardText>
              <CardMedia
                expandable
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              >
                <img src="img/sign.jpg" />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" expandable />
              <CardText expandable>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label="Expand" onTouchTap={this.handleExpand} />
                <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
              </CardActions>
            </Card>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
