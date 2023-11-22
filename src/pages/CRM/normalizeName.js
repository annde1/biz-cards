const normalizeData = (users) => {
  const normalized = users.map((user) => {
    const normalizedUser = {
      ...user,
      name: {
        ...user.name,
        first:
          user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1),
        last: user.name.last.charAt(0).toUpperCase() + user.name.last.slice(1),
      },
      address: {
        ...user.address,
        city:
          user.address.city.charAt(0).toUpperCase() +
          user.address.city.slice(1),
        country:
          user.address.country.charAt(0).toUpperCase() +
          user.address.country.slice(1),
        street:
          user.address.street.charAt(0).toUpperCase() +
          user.address.street.slice(1),
      },
      createdAt: new Date(user.createdAt).toLocaleString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    };
    return normalizedUser;
  });
  return normalized;
};
export { normalizeData };
