export function splitArr(arr, size) {
  if (arr.length > 0) {
    const res = [];
    let idx = 0;

    while (idx < arr.length) {
      res.push(arr.slice(idx, idx + size));
      idx += size;
    }
    return res;
  }
}


export const hideShowPopUp = (popUp, state, setState) => {
  if (state) {
    setState(false);
    popUp.classList.remove("show");
    popUp.classList.add("hide");
  } else {
    setState(true);
    popUp.classList.remove("hide");
    popUp.classList.add("show");
  }
};


