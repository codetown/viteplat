import { GithubOutlined } from '@ant-design/icons'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <GithubOutlined />
      <strong>Copyright &copy;{currentYear}</strong>
    </footer>
  )
}

export default Footer
