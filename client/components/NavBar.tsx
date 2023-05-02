import { Link } from 'react-scroll'

export default function NavBar() {
  return (
    <div>
      <button>
        <Link to="hero" spy={true} offset={50} duration={500}>
          Home
        </Link>
      </button>
      <button>
        <Link to="about" spy={true} offset={50} duration={500}>
          About
        </Link>
      </button>
      <button>
        <Link to="projects" spy={true} offset={50} duration={500}>
          Projects
        </Link>
      </button>
    </div>
  )
}
