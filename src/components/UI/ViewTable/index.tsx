import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import * as React from 'react';

type props = {
  heading: { name: string; isSortable: boolean }[];
  children: string | JSX.Element | JSX.Element[];
  setReversed: () => void;
};

const Index: React.FC<props> = ({ heading, children, setReversed }) => {
  return (
    <div className="rounded-xl overflow-hidden">
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 500 }}
              aria-labelledby="tableTitle"
              size={'medium'}
            >
              <TableHead className="bg-secondary">
                <TableRow>
                  {heading.map((headCell, index) => (
                    <TableCell key={index} align="left">
                      <TableSortLabel
                        onClick={() => {
                          if (headCell.isSortable) setReversed();
                        }}
                      >
                        {headCell.name}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>{children}</TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </div>
  );
};

export default Index;
