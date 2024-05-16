import { UIStyledNav } from "@/components/UIComponents/StyleNav";
import { HeaderTabsType } from "../types";
import { HeaderTabs } from "./constants";
import Link from "next/link";
import { getQueryParam } from "@/utils/genericFunction";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useLanguageContext } from "../../../../../context/LanguageContext";
import { JSON_TYPES } from "@/constants/jsonConstants";
import Tab from "@mui/material/Tab";

const HeaderNav = ({
  pageIndex,
  handleClick,
}: {
  pageIndex: number;
  handleClick: (index: number) => void;
}) => {
  const { t } = useLanguageContext();
  const router = useRouter();

  let gender;
  if (router.asPath.includes("/gender")) gender = router.query.value as string;
  else gender = getQueryParam("gender", "") as string;

  const genderToTabIndex: { [key: string]: number } = {
    Women: 1,
    Shemale: 2,
    Men: 3,
    Couple: 4,
  };

  const selectedTabIndex = genderToTabIndex[gender] || 0;

  useEffect(() => {
    handleClick(selectedTabIndex);
  }, [gender, handleClick, selectedTabIndex]);

  return (
    <UIStyledNav value={pageIndex}>
      {HeaderTabs.map((tab: HeaderTabsType, index: number) => (
        <Tab
          key={index}
          LinkComponent={Link}
          href={tab.path}
          label={t(JSON_TYPES.COMMON, `${tab.name}`)}
          onClick={() => handleClick(index)}
        />
      ))}
    </UIStyledNav>
  );
};

export default HeaderNav;
