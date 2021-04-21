import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {TodoPage} from "./Pages/TodoPage";
import SecondPage from "./Pages/SecondPage";
import { AboutPage } from "./Pages/AboutPage";
import TodoList from './Pages/TodoList';
import Wikipedia from './Pages/Wikipedia';
import Navigation from "./Components/Card/navigation"

import { Layout } from 'antd';
import './index.css';
import 'antd/dist/antd.css';

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import reduce from './reducers/index';
import {connect} from 'react-redux';
import store from './reducers/index';

//let store = createStore(reduce);

const { Header, Content, Sider } = Layout;

const routes = [
  {
    path: "/",
    item: <UploadOutlined />,
    name: "Home",
    exact: true,
    main: () => <AboutPage />
  },
  {
    path: "/todopage",
    item: <UserOutlined />,
    name: "Todos",
    exact: true,
    main: () => <TodoPage />
  },
  {
    path: "/secondpage",
    item: <VideoCameraOutlined />,
    name: "Second",
    exact: true,
    main: () => <SecondPage />
  },
  {
    path: "/todopagered",
    item: <UserOutlined />,
    name: "TodoRed",
    exact: true,
    main: () => <TodoList />
  },
  {
    path: "/wiki",
    item: <UserOutlined />,
    name: "Wikipedia",
    exact: true,
    main: () => <Wikipedia />
  }
];

class App extends React.Component {
    
    state = {
      collapsed: false,
    };
  
    onCollapse = collapsed => {
      this.setState({ collapsed });
    }; 
    
  render() {
    const { collapsed } = this.state;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Router>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            {<Navigation menuitems={routes}/>}
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}></Header>
            <Content style={{ margin: '0 16px' }}>
              <Provider store={store}>
                <div style={{ flex: 1, padding: "10px" }}>
                  <Switch>
                    {routes.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                      />
                    ))}
                  </Switch>
                </div>
              </Provider>
            </Content>  
          </Layout>
        </Router>              
      </Layout>
    );
}
}

let mapStateToProps = (state) =>{
  return state;
}

let mapDispatchToProps ={}

let AppContainer = 
  connect(mapStateToProps, mapDispatchToProps) (App);

export default AppContainer;

