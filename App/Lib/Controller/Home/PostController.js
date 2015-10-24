/**
 * controller
 * @return 
 */

module.exports = Controller(function(){
  "use strict";
  return {
    listAction: function(){
    	var self = this;
    	var listPromise = D('post').select();
    
    	this.assign('list',listPromise);
    	this.display('Home/list.html');
    },
    detailAction:function(){
    	var id = this.get('id') | 0;
    	if(!id){
    		return this.error(100, 'param error');
    	};
    	var detailPromise = D('post').where({id:id}).find();
    	this.assign('post_info',detailPromise);
    	this.display('Home/detail.html');
    }
  };
});