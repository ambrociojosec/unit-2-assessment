var express = require('express');
var router = express.Router();
var todos = [{
  value: 'feed cat',
  completed: false
},
{
  value: 'wash face',
  completed: false
},
{
  value: 'make dinner',
  completed: false
},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', todos });
});

router.post('/', function(req, res, next) {
  todos.push(req.body)
  res.redirect('/');
});

function deleteOne (req, res) {
  var index;
  todos.forEach(function(value, idx) {
    if (req.params == value.value) {
      index = idx;
    }
    // value.splice(0, 1).push(req.body)
    // todos.save();
    // res.redirect('/');
    // console.log(value)
  })
  todos.splice(index, 1)
  // res.render('index', todos, {title: "unit 2 assessment"})
  res.render('index', { title: 'Express', todos });

}


router.post('/:id', deleteOne );


module.exports = router;
