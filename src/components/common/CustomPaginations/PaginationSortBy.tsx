import { memo, useMemo, useState } from 'react';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterList from '@mui/icons-material/FilterList';
import { PaginationSortByOption } from './type';

export type PaginationSortByProps = {
  sortByOptions: PaginationSortByOption[];
  orderField: string;
  orderType: string;
  handleChangeOrderBy: (field: string, type: string) => void;
};

const PaginationSortBy = ({ sortByOptions, orderField, orderType, handleChangeOrderBy }: PaginationSortByProps) => {
  const [open, setOpen] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const selectedLabel = useMemo(
    () => sortByOptions.filter((x) => x.value === orderField)[0]?.label ?? 'Newest',
    [sortByOptions, orderField]
  );

  return (
    <>
      <Button color="inherit" disableRipple onClick={handleOpen} sx={{ display: { xs: 'none', sm: 'flex', fontSize: '15px' } }}>
        Sort By:&nbsp;
        <ListItemText>{selectedLabel}</ListItemText>
        <ExpandMoreIcon />
      </Button>
      <IconButton
        color="inherit"
        disableRipple
        onClick={handleOpen}
        sx={{
          display: { xs: 'flex', sm: 'none' },
          justifyContent: { xs: 'flex-end' }
        }}
      >
        <FilterList />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {sortByOptions?.map((option) => (
          <MenuItem
            key={option?.value}
            selected={option?.value === orderField}
            onClick={() => {
              handleChangeOrderBy(option?.value, orderField === option?.value && orderType === 'asc' ? 'desc' : 'asc');
              handleClose();
            }}
            sx={{ typography: 'body2' }}
          >
            <ListItemText sx={{ mr: 2 }}>{option?.label}</ListItemText>

            {orderField === option?.value && (
              <Typography variant="body2" color="text.secondary">
                {orderType === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
              </Typography>
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default memo(PaginationSortBy);
