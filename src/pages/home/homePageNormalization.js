const homePageNormalization = (dataFromServer, id) => {
  for (let card of dataFromServer) {
    // if (user.likes.find((userId) => userId === id)) {
    //   user.likes = true;
    // } else {
    //   user.likes = false;
    // }
    card.likes = Boolean(card.likes.find((userId) => userId === id));
  }
  return dataFromServer;
};
export default homePageNormalization;
