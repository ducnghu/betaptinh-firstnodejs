var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bé tập tính' });
});

router.post('/', (req, res)=> {
  const firstnum = req.body.firstnum;
  const secondnum = req.body.secondnum;
  const calc = req.body.calc;
  result = 0;
  pluschecked = "";
  subchecked = "";
  mulchecked = "";
  divchecked = "";
  if (calc == "plus")
  {
    result = Number(firstnum) + Number(secondnum);
    pluschecked = "checked";
  } else if (calc == "sub")
  {
    result = firstnum - secondnum;
    subchecked = "checked";
  } else if (calc == "mul")
  {
    result = firstnum * secondnum;
    mulchecked = "checked";
  } else if (calc == "div")
  {
    result = firstnum / secondnum;
    divchecked = "checked";
  }
  res.render('index', { title: 'Bé tập tính', firstnum, secondnum, calc, result, pluschecked, subchecked, mulchecked, divchecked });
});

module.exports = router;
