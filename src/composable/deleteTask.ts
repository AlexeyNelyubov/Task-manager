
export const deleteTask = (tasks:string[], task:string, LocalStorageKey:string):void => {
    tasks.splice(tasks.indexOf(task), 1);
    if (tasks.length) {
        localStorage.setItem(LocalStorageKey, JSON.stringify(tasks));
      } else {
        localStorage.removeItem(LocalStorageKey);
      }
  };
