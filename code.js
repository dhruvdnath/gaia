setScreen("homeScreen");
onEvent("learnBtn", "click", function( ) {
  setScreen("sdgListScreenOne");
});
onEvent("carboncalc", "click", function( ) {
  setScreen("carbonfrootprintcalc");
});
onEvent("sdgOneImg", "click", function( ) {
  setScreen("sdgOneScreen");
});
onEvent("sdgOneBackBtn", "click", function( ) {
  setScreen("sdgListScreenOne");
});
onEvent("rippleBtn", "click", function( ) {
  setScreen("rippleScreen");
});
onEvent("impactBtn", "click", function( ) {
  setScreen("impactScreen");
});
onEvent("playBtn", "click", function( ) {
  setScreen("gameScreen");
});
onEvent("sdgOneListNextBtn", "click", function( ) {
  setScreen("sdgListScreenTwo");
});
onEvent("sdgOneListBackBtn", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("sdgTwoListBackBtn", "click", function( ) {
  setScreen("sdgListScreenOne");
});
onEvent("impactBackIcon", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("rippleBackIcon", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("gameBackIcon", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("doneGameBtn", "click", function( ) {
  setScreen("successScreen");
});
onEvent("nextCongratsBtn1", "click", function( ) {
  setScreen("gameScreen2");
});
onEvent("nextCongratsBtn2", "click", function( ) {
  setScreen("gameScreen3");
});
onEvent("nextCongratsBtn3", "click", function( ) {
  setScreen("noTaskScreen");
});
onEvent("doneGameBtn2", "click", function( ) {
  setScreen("successScreen2");
});
onEvent("doneGameBtn3", "click", function( ) {
  setScreen("successScreen3");
});
onEvent("nextTaskBtn1", "click", function( ) {
  setScreen("gameScreen2");
});
onEvent("nextTaskBtn2", "click", function( ) {
  setScreen("gameScreen3");
});
onEvent("nextTaskBtn3", "click", function( ) {
  setScreen("noTaskScreen");
});
onEvent("playAgainBtn", "click", function( ) {
  setScreen("gameScreen");
});
onEvent("playAgainBtn", "click", function( ) {
  setScreen("gameScreen");
});
onEvent("playGameBtn", "click", function( ) {
  open("https://studio.code.org/projects/gamelab/mRaLlxkm9A8hpdi7uakSpzPVc22f9bza16Hzrwf-2_w");
});
onEvent("playGameBtn2", "click", function( ) {
  open("https://studio.code.org/projects/gamelab/nH3fjOJ7JYJrRrSZTClcf4pgI9AMn5OF215QD0aCSDs");
});
onEvent("playGameBtn3", "click", function( ) {
  open("https://studio.code.org/projects/gamelab/5fZjjIDomU8e-PgiP-p14CG3Avkp-qTc7PwWlD9Qo3I");
});

onEvent("calculate", "click", function( ) {
	console.log("calculate clicked!");
  showElement("totalcarbon");	
	
});
onEvent("calcback", "click", function( ) {
  setScreen("homeScreen");
});