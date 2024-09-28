import React, { useEffect } from 'react';
import styles from './ZohoFormModal.module.css'; // Import the CSS module

const ZohoFormModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `
        (function() {
          try {
            var f = document.createElement("iframe");
            f.src = 'https://forms.zohopublic.in/pennyflo/form/GetEarlyAccess1/formperma/2pdctxxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94?zf_rszfm=1';
            f.style.border = "none";
            f.style.height = "320px";
            f.style.width = "90%";
            f.style.transition = "all 0.5s ease";
            f.setAttribute("aria-label", 'Get Early Access');
            var d = document.getElementById("zf_div_2pdctxxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94");
            d.appendChild(f);
            window.addEventListener('message', function () {
              var evntData = event.data;
              if (evntData && evntData.constructor == String) {
                var zf_ifrm_data = evntData.split("|");
                if (zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3) {
                  var zf_perma = zf_ifrm_data[0];
                  var zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
                  var iframe = document.getElementById("zf_div_2pdctxxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94").getElementsByTagName("iframe")[0];
                  if ((iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0) {
                    var prevIframeHeight = iframe.style.height;
                    if (prevIframeHeight !== zf_ifrm_ht_nw) {
                      iframe.style.height = zf_ifrm_ht_nw;
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

    return () => {
      const formDiv = document.getElementById("zf_div_2pdctxxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94");
      if (formDiv) {
        formDiv.innerHTML = ''; // Clean up the form on modal close
      }
    };
  }, [isOpen]);

  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>Close</button>
        <div id="zf_div_2pdctxxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94"></div>
      </div>
    </div>
  );
};

export default ZohoFormModal;
