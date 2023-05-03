import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <div className="About-Container" id="about">
        <div className="About-Header">
          <h2>About Me</h2>
        </div>
        <div>
          <p>
            My passion for technology and an unbridled sense of curiosity led me
            to pursue the wide, wonderful world of software development. I aim
            to apply my newfound skills to make beautiful, accessible
            applications for users to engage with. Prior, I had been a
            practising graphic designer for over four years, specialising in
            print, packaging, and identity design. My goal throughout my career
            has been to facilitate the needs of small and large businesses,
            utilising e-commerce solutions and eDM marketing strategies to grow
            and reach new customers.{' '}
          </p>
          <Link
            to="/files/Raghav-Sidharth-CV-2023.pdf"
            target="_blank"
            download
          >
            Download My CV
          </Link>
        </div>
      </div>
    </>
  )
}
