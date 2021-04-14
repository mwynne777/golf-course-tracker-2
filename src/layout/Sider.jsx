import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';

const StyledSider = styled(Sider)`
    .ant-layout-sider-zero-width-trigger {
        top: 10px;
    }
  
    .ant-layout-sider {
        padding-top: 64px;
    }
`;

const SiderComp = () => {
    return (
        <StyledSider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    nav 1
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                </Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined />}>
                    nav 4
                </Menu.Item>
            </Menu>
        </StyledSider>
    );
};

export default SiderComp;