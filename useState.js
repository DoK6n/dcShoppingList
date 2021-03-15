const state = (() => {
  let instance;

  const init = () => {
    let itemId = 1;

    return {
      add: () => {
        itemId++;
      },
      remove: () => {
        itemId--;
      },
      getId: () => itemId,
      getNextId: () => itemId + 1,
    };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();
