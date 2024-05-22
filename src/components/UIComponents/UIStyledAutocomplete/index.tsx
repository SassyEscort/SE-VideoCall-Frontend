import { styled } from '@mui/material';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import { MultipleOptionString } from 'views/protectedModelViews/verification/verificationTypes';

const UIStyledAutocomplete = styled((props: AutocompleteProps<MultipleOptionString, false, false, false>) => <Autocomplete {...props} />)(
  () => ({
    '& .MuiOutlinedInput-root': {
      padding: { xs: '0px important' }
    },
    '& .MuiAutocomplete-inputRoot': {
      paddingRight: {
        xs: '13px !important',
        sm: '16px !important'
      },
      padding: 0
    }
  })
);

export default UIStyledAutocomplete;
