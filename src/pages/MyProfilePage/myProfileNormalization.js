const normalizeDataProfilePage = (data) => {
  const normalized = {
    state: data.address.state,
    country: data.address.country,
    city: data.address.city,
    street: data.address.street,
    houseNumber: data.address.houseNumber,
    zip: data.address.zip,
    createdAt: data.createdAt,
    email: data.email,
    url: data.image.url,
    alt: data.image.alt,
    isBusiness: data.isBusiness,
    first: data.name.first,
    last: data.name.last,
    phone: data.phone,
  };

  return normalized;
};
export { normalizeDataProfilePage };
