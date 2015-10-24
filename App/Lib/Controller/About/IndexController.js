module.exports = Controller('About/BaseController',function(){
  'use strict';
  return {
    indexAction: function(){
      //render View/Home/index_index.html file
      this.display('About/index.html');
    }
  }
})