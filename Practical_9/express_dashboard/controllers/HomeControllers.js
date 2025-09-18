
const getHomePage = (req, res) => {
  res.send(`
    <h1 style="font-size: 48px; font-weight: bold; text-align:center; margin-top: 20%;">
        Welcome to Dashboard
        </h1> 
        `);
};

module.exports = { getHomePage };
