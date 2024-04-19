import { ArrowLeft, Moon, GitHub } from 'react-feather'
import {
  Box,
  Container,
  IconButton,
  Button,
  Image,
  Text,
  Link as A,
  useColorMode
} from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavButton = ({ sx, ...props }) => (
  <IconButton
    {...props}
    sx={{
      color: 'red',
      borderRadius: 'circle',
      transition: 'box-shadow .125s ease-in-out',
      ':hover,:focus': {
        boxShadow: '0 0 0 2px',
        outline: 'none'
      },
      ...sx
    }}
  />
)

const BackButton = ({ to = '/', text = 'All Hackathons' }) => (
  <Link href={to} passHref>
    <NavButton
      as="a"
      title={to === '/' ? 'Back to homepage' : 'Back'}
      sx={{ display: 'flex', width: 'auto', pr: 2 }}
    >
      <ArrowLeft />
      {text}
    </NavButton>
  </Link>
)

const Flag = () => (
  <A
    href="https://hackclub.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Hack Club homepage"
    sx={{ mt: -3, lineHeight: 0 }}
  >
    <Image
      src="https://drive.google.com/file/d/1E-iUO55CJ2vMdy1l0WmiWz-68TeKQFUt/view?usp=sharing"
      alt="Hack Club flag"
      sx={{ width: [96, 128] }}
    />
  </A>
)

const ColorSwitcher = props => {
  const [mode, setMode] = useColorMode()
  return (
    <NavButton
      {...props}
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      title="Reverse color scheme"
    >
      <Moon size={24} />
    </NavButton>
  )
}

export default ({app = false}) => {
  const router = useRouter()
  const home = router.pathname === '/'
  return (
    <Box
      as="nav"
      sx={{
        bg: home ? 'none' : 'sheet',
        color: 'primary',
        py: 3,
        display: home && app ? 'none' : 'block'
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          pr: 2,
          a: {
            fontSize: 1,
            color: 'primary',
            textDecoration: 'none',
            mr: [3, 4]
          }
        }}
      >
        {!home ? <BackButton /> : <Flag />}
        <Button
          as="a"
          variant="outline"
          href="https://dash.hackathons.hackclub.com/hackathons/submissions/new"
          aria-label="Apply to list your hackathon"
          sx={{
            width: 'auto',
            ml: 'auto',
            boxShadow: 'none !important',
            py: 1,
            px: 3
          }}
        >
          <Text as="span" sx={{ display: ['block', 'none'] }}>
            Submit
          </Text>
          <Text as="span" sx={{ display: ['none', 'block'] }}>
            Add Your Event
          </Text>
        </Button>
        <NavButton
          as="a"
          href="https://github.com/hackclub/hackathons"
          aria-label="View source code on GitHub"
        >
          <GitHub size={24} />
        </NavButton>
        <ColorSwitcher />
      </Container>
    </Box>
  )
}
