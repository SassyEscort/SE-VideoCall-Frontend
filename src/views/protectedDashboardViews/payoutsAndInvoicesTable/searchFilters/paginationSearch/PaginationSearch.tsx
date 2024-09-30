'use client';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import { memo } from 'react';
import { StyledRoot, StyledSearch } from './PaginationSearch.styled';
import useRebounceSearch from 'hooks/useRebounce';
import { Box, FormControl } from '@mui/material';

export type PaginationSearchProps = {
  placeholder: string;
  handleChangeSearch?: (val: string) => void;
};

const PaginationSearch = ({ placeholder, handleChangeSearch }: PaginationSearchProps) => {
  const handleClearSearch = () => {
    handleChangeSearch && handleChangeSearch('');
    handleSearchKeywordChange('');
  };

  const { keyword, handleSearchKeywordChange } = useRebounceSearch((searchValue) => {
    handleChangeSearch && handleChangeSearch(searchValue);
  });

  return (
    <>
      <FormControl id="search" sx={{ width: '100%' }}>
        <StyledRoot>
          <StyledSearch
            value={keyword}
            onChange={(e) => handleSearchKeywordChange(e.target.value)}
            placeholder={placeholder}
            sx={{ width: '100%', '&.Mui-focused': { width: '100%' }, color: 'text.secondary' }}
            startAdornment={
              <InputAdornment position="start">
                <Box
                  component="img"
                  src="/images/payout/search-line.png"
                  sx={{ color: 'text.primary', width: 20, height: 20 }}
                  alt="search_icon"
                />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                {keyword && (
                  <IconButton edge="end" onClick={handleClearSearch} sx={{ color: 'text.secondary' }}>
                    <Close />
                  </IconButton>
                )}
              </InputAdornment>
            }
          />
        </StyledRoot>
      </FormControl>
    </>
  );
};

export default memo(PaginationSearch);
