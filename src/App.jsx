import Game from './components/Game'
import { Flex, Layout } from 'antd';
import { Typography } from 'antd';
const { Header, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center', // по горизонтали
  alignItems: 'center',     // по вертикали
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#0958d9',
};
const contentStyle = {
  display: 'flex',
  paddingTop: '20px',
  justifyContent: 'center', // по горизонтали
  backgroundColor: '#ffffffff',
};

const layoutStyle = {
  overflow: 'hidden',
  width: '100wh',
  height: '100vh'
};


export default function App() {
  return (
    <>
      <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}><Typography.Title style={{ marginBottom: '0', color: '#fff' }}>Tic Tac Toe</Typography.Title></Header>
          <Content style={contentStyle}><Game /></Content>
        </Layout>
      </Flex>
    </>
  )
}
