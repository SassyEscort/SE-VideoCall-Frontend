import React from 'react';
import Autocomplete, { AutocompleteChangeDetails, AutocompleteChangeReason, AutocompleteProps } from '@mui/material/Autocomplete';
import { MultipleOptionString } from 'views/protectedModelViews/verification/verificationTypes';
import { styled } from '@mui/material/styles';
import { FilterOptionsState } from '@mui/material/useAutocomplete';

const UIStyledAutocomplete = styled(
  (
    props: AutocompleteProps<MultipleOptionString, boolean, boolean, boolean> & {
      getOptionLabel: (option: MultipleOptionString) => string;
      onChange?: (
        event: React.SyntheticEvent<Element, Event>,
        value: MultipleOptionString | null,
        reason: AutocompleteChangeReason,
        details?: AutocompleteChangeDetails<MultipleOptionString> | undefined
      ) => void;
      filterOptions?:
        | ((options: MultipleOptionString[], state: FilterOptionsState<MultipleOptionString>) => MultipleOptionString[])
        | undefined;
    }
  ) => <Autocomplete {...props} />
)(() => ({
  '& .MuiOutlinedInput-root': {
    padding: { xs: '0px !important' }
  },
  '& .MuiAutocomplete-inputRoot': {
    paddingRight: {
      xs: '13px !important',
      sm: '16px !important'
    },
    padding: 0
  }
}));

export default UIStyledAutocomplete;
