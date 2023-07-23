const style = {
  error: 'text-red-500 text-sm text-right',
  border: 'border border-gray-500 rounded-md ',
  focus: 'focus:ring-blue-500 focus:border-blue-500',
  text: 'text-sm text-gray-700',
  default: 'block w-full px-5 py-2 shadow-sm rounded-md ',
};

export const styleInput = {
  default: `${style.default} ${style.border} ${style.focus} ${style.text}`,
  label: `${style.text} font-medium`,
  error: `${style.error}`,
};
