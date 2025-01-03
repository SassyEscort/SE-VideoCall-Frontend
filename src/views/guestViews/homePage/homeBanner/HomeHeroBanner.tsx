// import React from 'react';
// import Image from 'next/image';
// import { BannerImageCard } from 'views/guestViews/commonComponents/WorkerCard/WorkerCard.styled';

// const HomeHeroBanner = ({ isSmDown, isSm }: { isSmDown: boolean; isSm: boolean }) => {
//   return (
//     <BannerImageCard>
//       <picture>
//         {/* <source
//           media="(max-width:699px)"
//           srcSet="/images/home/home-banner-model1.webp"
//           type="image/webp"
//         />
//         <source
//           media="(max-width:640px)"
//           srcSet="/images/home/home-banner-model1.webp"
//           type="image/webp"
//         /> */}
//         {/* <Image
//           alt="home_model"
//           decoding="async"
//           width={isSm && isSmDown ? 300 : isSmDown ? 347 : 462}
//           height={isSmDown ? 339 : 452}
//           src="https://ik.imagekit.io/gpgv4gnda/images/1729084436818home-banner-model1_1qobIoZFu.webp"
//           placeholder="blur"
//           blurDataURL="/images/home/home-banner-blur.webp"
//           style={{ borderRadius: '12px', right: 0 }}
//           priority={true}
//           loading="eager"
//           fetchPriority="high"
//           layout="intrinsic"
//           sizes="(max-width: 600px) 300px, (max-width: 768px) 347px, 462px"
//         /> */}
//         {/* <Image
//           alt="home_model"
//           fetchPriority="high"
//           loading="eager"
//           decoding="async"
//           style={{
//             color: 'transparent',
//             borderRadius: '12px',
//             right: 0,
//             maxWidth: '100%',
//             height: 'auto'
//           }}
//           width={462}
//           height={452}
//           {...(isSmDown && { width: 347, height: 339 })}
//           {...(isSm && isSmDown && { width: 300, height: 339 })}
//           src="https://ik.imagekit.io/gpgv4gnda/images/1729084436818home-banner-model1_1qobIoZFu.webp"
//           placeholder="blur"
//           blurDataURL="/images/home/home-banner-blur.webp"
//           sizes="(max-width: 600px) 300px, (max-width: 768px) 347px, 462px"
//         /> */}

//         {isSm ? (
//           <Image
//             alt="home_model"
//             decoding="async"
//             width={300}
//             height={339}
//             src="/images/home/home-banner-model1.webp"
//             style={{ borderRadius: '12px', right: 0 }}
//             priority
//             placeholder="blur"
//             blurDataURL="/images/home/home-banner-model_blur.webp"
//             layout="fixed"
//           />
//         ) : isSmDown ? (
//           <Image
//             alt="home_model"
//             decoding="async"
//             width={347}
//             height={339}
//             src="/images/home/home-banner-model1.webp"
//             style={{ borderRadius: '12px', right: 0 }}
//             priority
//             placeholder="blur"
//             blurDataURL="/images/home/home-banner-model_blur.webp"
//             layout="fixed"
//           />
//         ) : (
//           <Image
//             alt="home_model"
//             decoding="async"
//             width={462}
//             height={452}
//             src="/images/home/home-banner-model1.webp"
//             style={{ borderRadius: '12px', right: 0 }}
//             priority
//             placeholder="blur"
//             blurDataURL="/images/home/home-banner-model_blur.webp"
//             layout="fixed"
//           />
//         )}

//         {/* <Image
//           alt="home_model"
//           decoding="async"
//           width={300}
//           height={339}
//           src="/images/home/home-banner-model1.webp"
//           style={{ borderRadius: '12px', right: 0 }}
//           priority
//           placeholder="blur"
//           blurDataURL="/images/home/home-banner-model_blur.webp"
//           layout="fixed"
//         /> */}
//       </picture>
//     </BannerImageCard>
//   );
// };

// export default HomeHeroBanner;

import React from 'react';
import Image from 'next/image';
import { BannerImageCard } from 'views/guestViews/commonComponents/WorkerCard/WorkerCard.styled';

const HomeHeroBanner = ({ isSmDown, isSm }: { isSmDown: boolean; isSm: boolean }) => {
  const dimensions = isSm ? { width: 300, height: 339 } : isSmDown ? { width: 347, height: 339 } : { width: 462, height: 452 };

  return (
    <BannerImageCard>
      <Image
        alt="home_model"
        src="/images/home/home-banner-model1.webp"
        width={dimensions.width}
        height={dimensions.height}
        style={{ borderRadius: '12px', right: 0 }}
        placeholder="blur"
        blurDataURL="/images/home/home-banner-model_blur.webp"
        priority
        sizes="(max-width: 600px) 300px, (max-width: 768px) 347px, 462px"
        layout="intrinsic" // Better for responsive scaling
      />
    </BannerImageCard>
  );
};

export default HomeHeroBanner;
