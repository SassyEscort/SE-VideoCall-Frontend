import Image from 'next/image';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { FLAG_IMAGES, LANGUAGES } from 'constants/languageConstants';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import useConfig from 'hooks/useConfig';
import { I18n } from 'types/config';

const LanguageDropdown = () => {
  const { i18n, onChangeLocalization } = useConfig();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleLanguageChange = (event: SelectChangeEvent) => {
    onChangeLocalization(event.target.value as I18n);
  };

  return (
    <FormControl
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
          p: '0px !important'
        }
      }}
    >
      <Select
        value={i18n}
        onChange={handleLanguageChange}
        autoWidth
        size="small"
        sx={{
          '& .MuiSelect-icon': {
            display: 'none'
          }
        }}
        endAdornment={
          isSmUp && <KeyboardArrowDownRoundedIcon sx={{ height: 16, width: 16, color: 'common.white', paddingRight: '0px !important' }} />
        }
        renderValue={(value) => {
          const imagePath = FLAG_IMAGES[value].replace('g/', '\\');
          return (
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={imagePath}
                alt={`${value} flag`}
                width={20}
                height={12}
                style={{
                  marginRight: '10px',
                  display: 'flex'
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
        {LANGUAGES.map((lang, key: number) => {
          const imagePath = FLAG_IMAGES[lang.locale].replace('g/', '\\');

          return (
            <MenuItem key={key} value={lang.locale}>
              <Image
                src={imagePath}
                alt={`${lang.title} flag`}
                width={20}
                height={12}
                style={{
                  marginRight: '10px',
                  display: 'flex'
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

export default LanguageDropdown;
