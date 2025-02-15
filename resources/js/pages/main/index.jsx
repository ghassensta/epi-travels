import { Iconify } from '@/components/iconify';
import { CONFIG } from '@/config-global';
import MainPageView from '@/sections/main/views/main-page-view';
import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

const metadata = { title: `Page one | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      {/* <Helmet>
        <title> {metadata.title}</title>
      </Helmet> */}
      <MainPageView />
    </>
  );
}
