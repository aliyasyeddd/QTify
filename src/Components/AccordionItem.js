import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./AccordionItem.css";

function AccordionItem() {
  return (
    <div className="accordion">
      <h1>FAQs</h1>
      <div className="accordion-child">
        <Accordion className="accordian-item">
          <AccordionSummary
            className="accordion-summary"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Is QTIFY free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordian-item">
          <AccordionSummary
            className="accordion-summary"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Can I download and listen to songs offline</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default AccordionItem;
