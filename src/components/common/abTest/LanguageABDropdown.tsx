import Image from 'next/image';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { FLAG_IMAGES, LANGUAGES } from 'constants/languageConstants';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import useConfig from 'hooks/useConfig';
import { I18n } from 'types/config';
import { useState } from 'react';
import { useAuthContext } from 'contexts/AuthContext';

const LanguageABDropdown = () => {
  const { handleGAEventsTrigger } = useAuthContext();
  const { i18n, onChangeLocalization } = useConfig();
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (event: SelectChangeEvent) => {
    onChangeLocalization(event.target.value as I18n);
    handleGAEventsTrigger('language-click', '', false, event.target.value);
    setOpen(false);
  };

  const handleToggle = () => {
    handleGAEventsTrigger('language-click', '', !open, i18n);
    setOpen(!open);
  };

  return (
    <FormControl
      className="test123"
      sx={{
        display: 'flex',
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none'
        },
        '& .MuiInputBase-input': {
          p: '0px !important',
          mt: '5px'
        },
        '& .mui-lleihv-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
          padding: '0px !important'
        }
      }}
    >
      <Select
        className="test456"
        value={i18n}
        onChange={handleLanguageChange}
        autoWidth
        size="small"
        open={open}
        onClose={() => setOpen(false)}
        onClick={handleToggle}
        sx={{
          borderRadius: '12px',
          paddingRight: 0,
          '& .MuiSelect-icon': {
            display: 'none'
          }
        }}
        endAdornment={
          <KeyboardArrowDownRoundedIcon
            sx={{ height: 16, width: 16, color: 'common.white', paddingRight: '0px !important', cursor: 'pointer' }}
          />
        }
        renderValue={(value) => {
          const imagePath = FLAG_IMAGES[value].replace('g/', '\\');
          return (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Image
                src={imagePath}
                alt={`${value} flag`}
                width={20}
                height={18}
                style={{
                  display: 'flex',
                  borderRadius: '50%'
                }}
                loading="lazy"
              />
              <Typography marginRight={0.5} variant="buttonLargeMenu" color="text.secondary">
                {value.toUpperCase()}
              </Typography>
            </Box>
          );
        }}
      >
        {LANGUAGES?.map((lang, key: number) => {
          const imagePath = FLAG_IMAGES[lang.locale].replace('g/', '\\');

          return (
            <MenuItem key={key} value={lang.locale}>
              <Image
                src={imagePath}
                alt={`${lang.title} flag`}
                width={20}
                height={20}
                style={{
                  marginRight: '10px',
                  display: 'flex',
                  borderRadius: '50%'
                }}
              />
              <Typography variant="buttonLargeMenu" color="text.secondary">
                {lang.title}
              </Typography>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default LanguageABDropdown;
