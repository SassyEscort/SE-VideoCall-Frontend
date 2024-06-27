import Pagination, { PaginationProps } from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

export const UITheme2Pagination = styled(({ ...props }: PaginationProps) => <Pagination {...props} />)(({ theme, ...props }) => {
  const { page, count } = props;
  return {
    borderRadius: '4px',
    backgroundColor: theme.palette.common.black,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',

    '& ul > li:last-child button': {
      color: theme.palette.common.white,
      display: page === count ? 'none' : 'flex'
    },
    '& ul > li:first-child button': {
      color: theme.palette.common.white,
      display: Number(page) > 1 ? 'flex' : 'none'
    },
    '& .MuiPaginationItem-root': {
      marginLeft: '12px !important',
      height: 'auto',
      minHeight: 50,
      width: '100%',
      maxWidth: 42,
      '&.MuiPaginationItem-root': {
        border: '1px solid',
        borderRadius: '4px',
        borderColor: theme.palette.secondary[800],
        opacity: 1,
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '160%',
        fontStyle: 'normal',
        backgroundColor: theme.palette.primary[700]
      },
      '&.Mui-selected': {
        border: '1px solid',
        borderRadius: '4px',
        borderColor: theme.palette.primary.main,
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '160%',
        fontStyle: 'normal',
        backgroundColor: theme.palette.common.black
      }
    }
  };
});
