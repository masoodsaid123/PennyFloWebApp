import React, { useEffect } from 'react';
import styles from './ZohoFormModal.module.css'; // Import CSS module

const ZohoFormModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `
        (function() {
          try {
            var f = document.createElement("iframe");
            f.src = 'https://forms.zohopublic.in/pennyflo/form/GetEarlyAccess1/formperma/2pdc-txxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94?zf_rszfm=1';
            f.style.border = "none";
            f.style.height = "320px";
            f.style.width = "90%";
            f.style.transition = "all 0.5s ease";
            f.setAttribute("aria-label", 'Get Early Access');
            
            var d = document.getElementById("zf_div_2pdc-txxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94");
            d.appendChild(f);
            window.addEventListener('message', function () {
              var evntData = event.data;
              if (evntData && evntData.constructor == String) {
                var zf_ifrm_data = evntData.split("|");
                if (zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3) {
                  var zf_perma = zf_ifrm_data[0];
                  var zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
                  var iframe = document.getElementById("zf_div_2pdc-txxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94").getElementsByTagName("iframe")[0];
                  if ((iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0) {
                    var prevIframeHeight = iframe.style.height;
                    var zf_tout = false;
                    if (zf_ifrm_data.length == 3) {
                      iframe.scrollIntoView();
                      zf_tout = true;
                    }
                    if (prevIframeHeight != zf_ifrm_ht_nw) {
                      if (zf_tout) {
                        setTimeout(function() {
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
          } catch (e) {}
        })();
      `;
      document.body.appendChild(script);
    }

    // Cleanup script on unmount
    return () => {
      const script = document.querySelector('script[type="text/javascript"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [isOpen]);

  return (
    isOpen && (
      <div className={styles.modalOverlay} onClick={onClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <button className={styles.modalClose} onClick={onClose}>X</button>
          <div id="zf_div_2pdc-txxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94"></div>
        </div>
      </div>
    )
  );
};

export default ZohoFormModal;
