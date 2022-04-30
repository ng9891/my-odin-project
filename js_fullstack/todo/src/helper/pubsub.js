const PubSub = (() => {
  const eventObj = {};

  const publish = (eventName, data) => {
    if (!eventObj[eventName]) return;
    eventObj[eventName].forEach((fn) => {
      fn(data);
    });
  };

  const subscribe = (eventName, fn) => {
    if (!eventObj[eventName]) {
      eventObj[eventName] = [];
    }
    eventObj[eventName].push(fn);
  };

  const unsubscribe = (eventName, fn) => {
    if (!eventObj[eventName]) return;

    for ([i, eventFn] of eventObj[eventName].entries()) {
      if (eventFn === fn) {
        eventObj[eventName].splice(i, 1);
        break;
      }
    }
  };

  return {publish, subscribe, unsubscribe};
})();

export default PubSub;
