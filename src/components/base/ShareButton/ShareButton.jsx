/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-globals */
import React from "react";
import T from "prop-types";
import cx from "classnames";
import Icon from "base/Icon";
import { trackEvent } from "utils";
import "./ShareButton.css";

const popupCenter = (url) => {
  const w = 650;
  const h = 460;
  // Fixes dual-screen position                             Most browsers      Firefox
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : screen.height;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft;
  const top = (height - h) / 2 / systemZoom + dualScreenTop;
  const newWindow = window.open(
    url,
    "",
    `
    scrollbars=yes,
    width=${w / systemZoom}, 
    height=${h / systemZoom}, 
    top=${top}, 
    left=${left}
    `
  );

  if (window.focus) newWindow.focus();
};

const share = (provider, url) => {
  trackEvent(`share_${provider}_click`);
  if (provider === "fb") {
    popupCenter(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
  } else if (provider === "vk") {
    popupCenter(`https://vk.com/share.php?url=${url}`);
  } else if (provider === "tw") {
    popupCenter(`https://twitter.com/intent/tweet?url=${url}`);
  }
};

const ShareButton = ({ className, provider, link }) => (
  <div
    className={cx("shareButton", `shareButton--${provider}`, className)}
    onClick={() => share(provider, `${window.location.origin}${link}`)}
  >
    <Icon type={provider} />
  </div>
);

ShareButton.propTypes = {
  provider: T.oneOf(["fb", "vk", "tw"]).isRequired,
  className: T.string,
  link: T.string.isRequired,
};

export default ShareButton;
