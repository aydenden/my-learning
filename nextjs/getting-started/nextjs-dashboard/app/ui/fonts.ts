import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});

/**
 * 로컬 font는 subsetting을 지원하지 않습니다.(https://fonts.google.com/knowledge/glossary/subsetting)
 * 그렇기에 로컬 폰트를 최적화하려면 자체적인 최적화가 필요함
 * 물론 이렇게 사용하지 않고 pnpm add pretendard 한후에 pretendard-dynamic-subset.css import하여 사용하면 커뮤니티에서 생성해놓은 서브셋을 사용 가능, 출근해서 PR해야겠네요...!
 *
 * 역시나 토스는 하고 있음, https://tossinvest.com/ 접속하여 네트워크 -> font를 확인해보면 자체 폰트를 서브셋하여 최적화된 폰트들이 다운됨
 */
export const pretendard = localFont({
    src: '../fonts/Pretendard-Regular.woff2',
    weight: '400',
    style: 'normal',
})


