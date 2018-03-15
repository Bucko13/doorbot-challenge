export function sel(id) {
  return `[data-test="${id}"]`;
}

export function changeInputValue(input, value) {
  input.simulate('change', { target: value });
}
