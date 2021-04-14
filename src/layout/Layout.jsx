import Sider from './Sider';
import { Layout } from 'antd';
const { Header, Content } = Layout;
import styled, { css } from 'styled-components';

const StyledLayout = styled(Layout)`
    .ant-layout-sider {
        padding-top: 64px;
    }
`;

const LayoutComp = (props) => {

    return (
        <StyledLayout>
            <Sider />
            <Layout>
                <Header />
                <Content style={{ margin: '24px 16px 0' }}>
                    {props.children}
                </Content>
            </Layout>
        </StyledLayout>
    );
};

export default LayoutComp;