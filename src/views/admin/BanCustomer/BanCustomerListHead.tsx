import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

export default function BanCustomerList() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>Customer</TableCell>
        <TableCell sx={{ textAlign: 'left' }}>Email</TableCell>
        <TableCell sx={{ textAlign: 'left' }}>Ip Address</TableCell>
        <TableCell sx={{ width: '1%' }}>Device Signature</TableCell>
        <TableCell sx={{ width: '1%' }}>Is Active</TableCell>
        <TableCell sx={{ width: '1%' }}>CreatedDate</TableCell>
        <TableCell sx={{ width: '1%' }}>ModifiedDate</TableCell>
        <TableCell sx={{ width: '1%' }}>Action</TableCell>
      </TableRow>
    </TableHead>
  );
}
