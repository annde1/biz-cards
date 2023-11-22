import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../App.css";

const AccordionComponent = (props) => {
  return (
    <>
      <Accordion sx={{ marginBottom: "1rem" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.children}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionComponent;
