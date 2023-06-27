
export const checkLocalStorage = (LocalStorageKey:string, tasks:string[]):void => {
    if (localStorage.getItem(LocalStorageKey)) {
      for (let task of localStorage.getItem(LocalStorageKey).split(",")) {
        tasks.push(task);
      }
    }
  };
