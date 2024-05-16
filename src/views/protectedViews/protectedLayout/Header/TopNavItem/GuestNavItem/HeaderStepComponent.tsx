import StyleButton from "@/components/UIComponents/StyleButton";
import LanguageDropdown from "@/components/common/LanguageDropdown";
import Box from "@mui/material/Box";
import Link from "next/link";
import { AuthManager } from "@/utils/authManager";
import { useLanguageContext } from "../../../../../../context/LanguageContext";
import { JSON_TYPES } from "@/constants/jsonConstants";

const HeaderStepComponent = () => {
  const { t } = useLanguageContext();

  return (
    <Box display="flex" alignItems="center" gap={1.5}>
      <Box display="flex">
        <LanguageDropdown isFlagShow={true} />
      </Box>
      <>
        <StyleButton
          variant="text"
          color="primary"
          href="/login"
          component={Link}
          prefetch={false}
          shallow={true}
          onClick={() => AuthManager.signoutUser()}
        >
          {t(JSON_TYPES.COMMON, "LogOut")}
        </StyleButton>
      </>
    </Box>
  );
};

export default HeaderStepComponent;
