const normalizeUserName = (data) => {
  const normalizedFirst =
    data.name.first.charAt(0).toUpperCase() + data.name.first.slice(1);
  const normalizedLast =
    data.name.last.charAt(0).toUpperCase() + data.name.last.slice(1);
  const normalizedName = {
    name: {
      first: normalizedFirst,
      last: normalizedLast,
    },
  };
  return normalizedName;
};
export { normalizeUserName };
