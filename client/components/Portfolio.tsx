import { Link } from 'react-router-dom'

export default function Portfolio() {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        <h3>Gallerina</h3>
        <p>
          Gallerina is a user-friendly art curation website similar to
          Pinterest, allowing users to scroll through and save artworks to their
          personal collections. Logged-in users can also search, filter, and
          manage their collections with ease.
        </p>
        <p>Built using: React, Redux, Tailwind, TypeScript, SQLite 3,</p>
        <Link to="https://github.com/tohora-2023/Gallerina" target="_blank">
          Link to Repo
        </Link>
      </div>
      <div>
        <h3>The G.O.A.T Car List</h3>
        <p>
          A project to collect and display some of the rarest, coolest, most
          exciting cars produced to date. Add your own cars to the list, update
          incorrect information on other cars, or if you feel a car doesn&apos;t
          belong in the collection delete it if you dare.
        </p>
        <p>Built using: React, Redux, TypeScript, SQLite 3,</p>
        <Link
          to="https://github.com/tohora-2023/my-fullstack-collection/tree/raghav"
          target="_blank"
        >
          Link to Repo
        </Link>{' '}
        <br />
        <Link to="http://car-collection.devacademy.nz/" target="_blank">
          Link to Deployed Site
        </Link>
      </div>
    </div>
  )
}
