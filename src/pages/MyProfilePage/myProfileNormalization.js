const normalizeDataProfilePage = (data) => {
  const normalized = {
    state: data.address.state,
    country:
      data.address.country.charAt(0).toUpperCase() +
      data.address.country.slice(1),
    city:
      data.address.city.charAt(0).toUpperCase() + data.address.city.slice(1),
    street:
      data.address.street.charAt(0).toUpperCase() +
      data.address.street.slice(1),
    houseNumber: data.address.houseNumber,
    zip: data.address.zip,
    createdAt: data.createdAt,
    email: data.email,
    url: data.image.url,
    alt: data.image.alt,
    isBusiness: data.isBusiness,
    first: data.name.first.charAt(0).toUpperCase() + data.name.first.slice(1),
    last: data.name.last.charAt(0).toUpperCase() + data.name.last.slice(1),
    phone: data.phone,
  };

  return normalized;
};
export { normalizeDataProfilePage };
