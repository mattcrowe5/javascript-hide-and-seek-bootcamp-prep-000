function getFirstSelector(selector){
  var selectorCalled = document.querySelector(selector);
  return selectorCalled;
}

function nestedTarget(){
  var uncovered = document.querySelector('body main #nested .target');
  return uncovered;
}

function increaseRankBy(n){
  var ranks = document.querySelectorAll('body main ul.ranked-list li')
  for(var i = 0; i<ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild(){
  var list = document.querySelectorAll('div#grand-node');
  var deepest;

  for(var i = 0; i<list.length; i++){
    var currentChild = list[i]
    while(currentChild.querySelector(':first-child') !== null){
      currentChild= currentChild.querySelector(':first-child');
      }
    deepest = currentChild
    }
  return deepest;
}
