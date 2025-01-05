
// eslint-disable-next-line react/no-danger

import Script from 'next/script';

export default function TawkScript() {
  return (
    <>
      <Script
        id="tawk-vars"
        dangerouslySetInnerHTML={{
          __html: 'var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();'
        }}
        strategy="beforeInteractive"
      />
      <Script
        src="https://embed.tawk.to/67785dec49e2fd8dfe022ded/1ign2tov2"
        strategy="lazyOnload"
      />
    </>
  );
}
