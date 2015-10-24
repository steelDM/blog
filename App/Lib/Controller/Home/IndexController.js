/**
 * controller
 * @return 
 */
var CLIP_LENGTH = 150;

function grapListData(data){

	data.forEach(function(item){
		item.content = clip(item.content, CLIP_LENGTH ,'...');
	})

	return data
}

module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
    	var self = this;

    	var articleList = D('article').select().then(grapListData);
   
    	this.assign('articleList',articleList);

    	this.display('Home/index.html');
    }

  };
});