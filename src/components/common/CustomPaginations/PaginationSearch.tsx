import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Close from '@mui/icons-material/Close';
import { StyledSearch } from './CustomPaginations.styled';
import { memo } from 'react';
import { StyledRoot } from 'components/UIComponents/StyledToolbar';
import useRebounceSearch from 'hooks/useDebounceSearch';

export type PaginationSearchProps = {
  placeholder: string;
  handleChangeSearch: (val: string) => void;
};

const PaginationSearch = ({ placeholder, handleChangeSearch }: PaginationSearchProps) => {
  const handleClearSearch = () => {
    handleChangeSearch('');
    handleSearchKeywordChange('');
  };

  const { keyword, handleSearchKeywordChange } = useRebounceSearch((searchValue) => {
    handleChangeSearch(searchValue);
  });

  return (
    <>
      <StyledRoot>
        <StyledSearch
          value={keyword}
          onChange={(e) => handleSearchKeywordChange(e.target.value)}
          placeholder={placeholder}
          sx={{ width: '100%', '&.Mui-focused': { width: '100%' } }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              {keyword && (
                <IconButton edge="end" onClick={handleClearSearch}>
                  <Close />
                </IconButton>
              )}
            </InputAdornment>
          }
        />
      </StyledRoot>
    </>
  );
};

export default memo(PaginationSearch);
