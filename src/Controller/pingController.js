function pingController(requset, response) {
  return response.json({ Success: true });
}

module.exports = {
  pingController,
};
