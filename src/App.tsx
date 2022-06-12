import { Container, Grid } from "@mui/material";
import { Navbar, Card } from "./components";
import { getNotesProps } from "./interface";
import React from "react";
import { getNotes } from "./api";

function App() {
  const [notes, setNotes] = React.useState<getNotesProps[]>([]);

  React.useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = await getNotes();
        setNotes(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNotes();
  }, []);
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: "2rem" }}>
        <Grid container spacing={{ xs: 1, sm: 2 }}>
          {notes.map(({ title, id, content }) => (
            <Grid item xs={6} sm={4} md={3} key={id}>
              <Card title={title} content={content} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
