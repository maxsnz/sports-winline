// обертка над try..catch чтобы возвращать [error, result]
export function* tryCatchG(fn, ...args) {
  // const args = [].slice.call(arguments, 1);
  try {
    // eslint-disable-next-line prefer-spread
    return [null, yield fn.apply(null, args)];
  } catch (e) {
    return [e];
  }
}

export function tryCatch(fn, ...args) {
  // const args = [].slice.call(arguments, 1);
  try {
    // eslint-disable-next-line prefer-spread
    return [null, fn.apply(null, args)];
  } catch (e) {
    return [e];
  }
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export function shuffle(a) {
  // eslint-disable-next-line no-plusplus
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function trackEvent(eventName, eventLabel = "") {
  // console.log("track event:", text);
  const { dataLayer } = window;
  if (dataLayer) {
    dataLayer.push({
      eventCategory: "winlinederbyfive",
      eventName,
      eventLabel,
      event: "winlinederbyfive",
    });
  }
}

export function parentResize({ width, height }) {
  const dataUTILS = {
    for: "DFPIC",
    action: "resizeIframe",
    selector: `#winlinederbyfive`,
    sizes: {
      height: height,
      width: width,
    },
  };
  window.top.postMessage(JSON.stringify(dataUTILS), "*");
}
