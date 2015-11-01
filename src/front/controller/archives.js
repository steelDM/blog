'use strict';

import Base from './base.js';

async function getArchives(_this) {

	//获取 user 模型实例
	let instance = _this.model("article");

	let data = await instance.order({'create_time':'DESC'}).select();
	//?如何在数据库中存储数组
	data.forEach(function(item){
		item.tag = item.tag.split(',');
	});

	return groupData(data,'create_time',function(time){
		return formartTime(time,'yyyy年M月');
	});
}


export default class extends Base {
	/**
	 * index action
	 * @return {Promise} []
	 */
	async indexAction(self) {

		let archives = await getArchives(this);

		this.assign('archives', archives);

		return this.display();
	}

}