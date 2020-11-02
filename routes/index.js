var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bé tập tính' });
});

router.post('/', (req, res)=> {
  const firstnum = req.body.firstnum;
  x = firstnum;
  if (x.indexOf(',') > -1) {
    x = x.slice(0,x.indexOf(',')) + "." + x.slice(x.indexOf(',') + 1);
  }
  const secondnum = req.body.secondnum;
  y = secondnum;
  if (y.indexOf(',') > -1) {
    y = y.slice(0,y.indexOf(',')) + "." + y.slice(y.indexOf(',') + 1);
  }
  const calc = req.body.calc;
  result = 0;
  pluschecked = "";
  subchecked = "";
  mulchecked = "";
  divchecked = "";
  if (calc == "plus")
  {
    result = Number(x) + Number(y);
    pluschecked = "checked";
  } else if (calc == "sub")
  {
    result = x - y;
    subchecked = "checked";
  } else if (calc == "mul")
  {
    result = x * y;
    mulchecked = "checked";
  } else if (calc == "div")
  {
    result = x / y;
    divchecked = "checked";
  }
  res.render('index', { title: 'Bé tập tính', firstnum, secondnum, calc, result, pluschecked, subchecked, mulchecked, divchecked });
});

module.exports = router;
