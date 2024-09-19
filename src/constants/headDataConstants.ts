export type HeadInnnerInfo = {
  title: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
};
export type HeadData = {
  url: string;
  data: { [locale: string]: HeadInnnerInfo };
};

export const getHeaderData = (routerPath: string): HeadInnnerInfo => {
  const HeaderData: HeadData[] = [
    // {
    //   url: '/',
    //   data: {
    //     en: {
    //       title: 'High quality - independent Escorts - in The Netherlands',
    //       metaTitle: 'Trans & Independent Escorts in Netherlands - Sassy Escort',
    //       metaKeywords: 'Escort services',
    //       metaDescription:
    //         'Discover discreet escort services in the Netherlands. Find Trans and Independent Escorts for unforgettable experiences. Indulge your desires today!'
    //     }
    //   }
    // },
    {
      url: '/details/maya1-7c7a60',
      data: {
        en: {
          title: 'Majestie Nancy - Sexy Cute Chubby Girl Live on Flirtbate',
          metaTitle: 'Majestie Nancy - Sexy Cute Chubby Girl Live on Flirtbate',
          metaKeywords: 'chubby girl Sexy Cute',
          metaDescription:
            'Experience the allure of 24 yeaes Majestie Nancy, a sexy, cute chubby girl who brings charm and seduction to her live streams. Watch now on Flirtbate for an unforgettable show.'
        }
      }
    }
  ];

  let headData = HeaderData.filter((x) => {
    console.log(x.url === routerPath, 'xxxxxx');

    return x.url === routerPath;
  })[0];
  console.log(headData, 'headData');

  if (!headData) headData = HeaderData[0];

  const currentCookieLanguage = 'en';

  return headData.data[currentCookieLanguage];
};
