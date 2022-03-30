export default function debounce(callback: Function, wait: number) {
  let timerId: any;
  return function () {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(callback, wait);
  };
}
