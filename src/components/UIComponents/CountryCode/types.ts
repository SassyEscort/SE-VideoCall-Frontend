export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

export interface CountrySelectProps {
  values: CountryType | null;
  handleChange: (value: CountryType | null) => void;
  title?: React.ReactNode;
  error?: boolean;
  disabled: boolean;
}
