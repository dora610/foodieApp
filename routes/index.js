var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const dishes = [{imgSrc: '/images/pizza-pic.jpg', imgAlt: 'pizza-image', desc: 'Tasty pizza!! yumm!!😋'},
                    {imgSrc: '/images/pexels-elli-1854652.jpg', imgAlt: 'choco-pastry', desc: 'Yumm!! so mouth watering 😋'}]
  res.render('index', { title: 'Foodie', dishes: dishes });
});

module.exports = router;
