import * as React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SimpleAccording = ({ dataArray }) => {

    console.log('jennifer',dataArray);

    return (
        <div>

            {dataArray.map((item) =>

                <Accordion key={item.adapterId}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ width: '95%', flexShrink: 0 }}>{item.adapterId}</Typography>
                        {item.considerHealthy ?
                            <CheckCircleIcon color="primary" />
                        :
                            <CheckCircleIcon color="error" />
                        }
                    </AccordionSummary>
                    <AccordionDetails>

                            <TableContainer>
                                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>deltaSyncInterval</TableCell>
                                            <TableCell>domainName</TableCell>
                                            <TableCell>fullSyncIntervalInDays</TableCell>
                                            <TableCell>packageName</TableCell>
                                            <TableCell>resourceName</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {item.capabilityEntities.map((entry:any) =>
                                            <TableRow
                                                key={entry.resourceName}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell>{entry.deltaSyncInterval} </TableCell>
                                                <TableCell>{entry.domainName}</TableCell>
                                                <TableCell>{entry.fullSyncIntervalInDays}</TableCell>
                                                <TableCell>{entry.packageName}</TableCell>
                                                <TableCell>{entry.resourceName}</TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                    </AccordionDetails>
                </Accordion>

            )}


        </div>
    );
}

SimpleAccording.propTypes = {
    dataArray: PropTypes.array.isRequired,
};

export default SimpleAccording;
