'use strict';

import Base from './base.js';

const CLIP_LENGTH = 150;

function grapListData(data){

  data.forEach(function(item){
    item.content = clip(item.content, CLIP_LENGTH ,'...');
  })

  return data
}


export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */

  async indexAction(self) {

    let data = await this.model('article').select();
    let articleList = grapListData(data);

    this.assign('articleList', articleList);

    return this.display();
  }


  async detailAction(self) {

    return this.display();

  }

}