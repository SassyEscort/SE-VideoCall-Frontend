import { debounce } from '@mui/material/utils';
import { useCallback, useMemo, useRef, useState } from 'react';

const WAIT_INTERVAL = 1000;

// eslint-disable-next-line no-unused-vars
type HandleCallback = (value: string) => void;

export default function useRebounceSearch(handleCallBack: HandleCallback) {
  const [keyword, setKeyword] = useState<string>('');
  const txtRef = useRef<string>('');

  const handleSearch = useCallback(() => {
    handleCallBack(txtRef.current);
  }, [handleCallBack]);

  const debouncedRefetch = useMemo(() => debounce(handleSearch, WAIT_INTERVAL), [handleSearch]);

  const handleSearchKeywordChange = useCallback(
    (value: string) => {
      setKeyword(value);
      txtRef.current = value || '';
      debouncedRefetch();
    },
    [debouncedRefetch]
  );

  return { keyword, handleSearchKeywordChange };
}
