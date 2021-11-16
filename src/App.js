import logo from './logo.svg';
import './App.css';
import { MovieList } from './MovieList';
import { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function App() {

  // const names = ["Arul","Shankar","Sakthi","Siva", "Bob"]
  const users = [
    {
      name: "Arul",
      pic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },

    {
      name: "Shankar",
      pic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },

    {
      name: "Sakthi",
      pic: "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-986x1024.jpg"
    },

    {
      name: "Siva",
      pic: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/05/Whatsapp-Profile-Images-wallpaper-hd-300x300.gif"
    },

    {
      name: "Bob",
      pic: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
    },

  ]

  const movies = [

    {
      name: "Avangers",
      poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      rating: "8",
      summary: "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D."
    },

    {
      name: "Titanic",
      poster: "https://m.media-amazon.com/images/I/613ghK14UjL._AC_SX466_.jpg",
      rating: "8",
      summary: "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him."
    },

    {
      name: "Pink",
      poster: "https://m.media-amazon.com/images/M/MV5BNGI1MTI1YTQtY2QwYi00YzUzLTg3NWYtNzExZDlhOTZmZWU0XkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_.jpg",
      rating: "7",
      summary: "After being molested, Minal, along with her friends, tries to file an FIR against a politician's nephew. When the subsequent case gets rigged, Deepak, a retired lawyer, helps them to fight the case.",
    },

    {
      name: "Mangatha",
      poster: "https://i.pinimg.com/564x/5c/ce/44/5cce446b9de4e3a035eb1b8bd469a3da.jpg",
      rating: "8",
      summary: "Inspector Vinayak is suspended after he lets a smuggler escape. He then meets a group of men who plan to whisk away 500 crore belonging to a gangster. He promises to help them for a share in the loot."
    },

    {
      name: "Ispade Rajavum Idhaya Raniyum",
      poster: "https://m.media-amazon.com/images/M/MV5BYTVkNzRjZmMtZWM0Ny00MzAwLTg4MjAtMzQ0MWJiNmJlZWYyXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_.jpg",
      rating: "8.5",
      summary: "Gautham, an unemployed youth, is in love with Thara, who comes from an affluent family. However, the repercussions of his disturbing childhood hampers their relationship."
    },


    {
      name: "Madras",
      poster: "https://m.media-amazon.com/images/M/MV5BODUyYmVmZjQtOGYyYS00ZTgxLTlhOWYtYTRjMzk4ZDA1ZDgxXkEyXkFqcGdeQXVyODk1MzE5NDA@._V1_.jpg",
      rating: "8",
      summary: "A wall creates discord between two factions of a political party. Kaali and his friend Anbu, who is a political aspirant, get embroiled in the brutal political rivalry."
    },

    {
      name: "The Lord of the Rings: The Return of the King",
      poster: "https://sm.ign.com/ign_ap/screenshot/default/the-lord-of-the-rings-the-return-of-the-king-59b7d7a3775bf_dhkf.jpg",
      rating: "8.9",
      summary: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    },

  ]
  return (
    <div className="App">

      {/* <MovieList movies={movies} /> */}
      <AddColor />
    </div>
  );
}

function AddColor() {
  const [color, setColor] = useState("orange")
  const styles = { backgroundColor: color }
  // const colors = ["teal", "orange", "lavender"]

  const [colors, setColors] = useState(["teal", "orange", "lavender"])
  return (<div>
    <div className="add-color-form">
      <TextField value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        label="Enter a Color" variant="standard" />

      <Button onClick={() => setColors([...colors, color])}
        variant="outlined">
        Add Color
      </Button>
    </div>

    {colors.map((clr, index) => (
      <ColorBox key={index} color={clr} />))}

  </div>
  );
}

function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "250px",
    marginTop: "10px"
  }
  return <div style={styles}></div>
}