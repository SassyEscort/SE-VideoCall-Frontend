import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export const UINewTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} arrow classes={{ popper: className }} />)(
  ({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.primary[500]
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.primary[500]
    }
  })
);
