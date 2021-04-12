import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {TodoPage} from "./Pages/TodoPage";
import SecondPage from "./Pages/SecondPage";
import { AboutPage } from "./Pages/AboutPage";
import { TodoPage2 } from "./Pages/TodoPage2";

import { Layout, Menu } from 'antd';
import './index.css';
import 'antd/dist/antd.css';

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'

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
    //exact: true,
    main: () => <TodoPage />
  },
  {
    path: "/secondpage",
    item: <VideoCameraOutlined />,
    name: "Second",
    //exact: true,
    main: () => <SecondPage />
  },
  {
    path: "/todopage2",
    item: <UserOutlined />,
    name: "Todos2",
    //exact: true,
    main: () => <TodoPage2 />
  }
];

class App extends React.Component {
    state = {
      collapsed: false,
    };
  
    onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({ collapsed });
    }; 
    
  render() {
    const { collapsed } = this.state;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Router>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <Menu theme="dark" mode="inline">
                {routes.map((route, index) =>(
                  <Menu.Item key={index} icon={route.item}>
                    <Link key={index} to={route.path} exact={route.exact}>{ route.name }</Link>
                  </Menu.Item>
                ))}
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              <Switch>  
                {routes.map((route, index) =>(
                    <Link key={index} to={route.path} exact={route.exact}>{ route.name }</Link>
                  ))}
              </Switch>
            </Header>
            <Content style={{ margin: '0 16px' }}>
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
            </Content>
          </Layout>
        </Router>              
      </Layout>
    );
}
}
export default App;

