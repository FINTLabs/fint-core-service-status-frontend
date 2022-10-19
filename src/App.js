import './App.css';
import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
    dividerClasses
} from '@mui/material'
import AnalyticsIcon from '@mui/icons-material/Analytics';
import getData from "./data/ApiRepository";
import {useState} from "react";

function GraphCard() {
    const [data, setData] = useState(getData)

    return (
        <Card sx={{maxWidth: 350, minHeight: 350, margin: 5}}>
            <CardMedia></CardMedia>
        </Card>
    )
}

function App() {
  return (
      <>
          <AppBar position={"relative"}>
              <Toolbar>
                  <AnalyticsIcon sx={{marginRight: 2, fontSize: 35}} />
                  <Typography variant={"h5"}>
                      Fint core service status
                  </Typography>
              </Toolbar>
          </AppBar>
          <main>
              <GraphCard />
              <GraphCard />
          </main>
      </>

  );
}

export default App;
