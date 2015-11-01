'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }

  async postAction(){

  	this.http.post('create_time',this.http.startTime);
  	this.http.post('update_time',this.http.startTime);

  	let D = await this.model('article').add(this.http._post);

    this.http.json(this.http._post);
  }

}