import View from "./componets/View";
import Grid from "@mui/system/Unstable_Grid/Grid";

export default function App() {

  return (

    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
      sx={{ bgcolor: '#e3e3e3' }}
    >

      <View />

    </Grid>

  );

}