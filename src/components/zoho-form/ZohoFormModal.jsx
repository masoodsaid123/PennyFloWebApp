import { useEffect } from 'react';
import styles from './ZohoFormModal.module.css'; // Importing CSS module

const ZohoFormContent = () => {
  useEffect(() => {
    try {
      const iframe = document.createElement('iframe');
      iframe.src = 'https://forms.zohopublic.in/pennyflo/form/GetEarlyAccess1/formperma/2pdc-txxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94?zf_rszfm=1';
      iframe.style.border = 'none';
      iframe.style.height = '400px';  // Updated height
      iframe.style.width = '100%';    // Full width
      iframe.style.transition = 'all 0.5s ease';
      iframe.setAttribute('aria-label', 'Get\x20Early\x20Access');

      const div = document.getElementById('zf_div_2pdc-txxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94');
      div.appendChild(iframe);

      window.addEventListener('message', function (event) {
        const evntData = event.data;
        if (evntData && evntData.constructor === String) {
          const zf_ifrm_data = evntData.split('|');
          if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
            const zf_perma = zf_ifrm_data[0];
            const zf_ifrm_ht_nw = `${parseInt(zf_ifrm_data[1], 10) + 15}px`;
            const iframe = document.getElementById('zf_div_2pdc-txxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94').getElementsByTagName('iframe')[0];
            if ((iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0) {
              const prevIframeHeight = iframe.style.height;
              const zf_tout = zf_ifrm_data.length === 3 ? true : false;
              if (prevIframeHeight !== zf_ifrm_ht_nw) {
                if (zf_tout) {
                  setTimeout(() => {
                    iframe.style.height = zf_ifrm_ht_nw;
                  }, 500);
                } else {
                  iframe.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        }
      }, false);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return <div id="zf_div_2pdc-txxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94" className={styles.zohoFormContainer}></div>;
};

export default ZohoFormContent;
