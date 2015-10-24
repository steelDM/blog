module.exports = Controller({
	__before:function(argument) {
	//	return this.checkUserLogin();
	},
	checkUserLogin:function(argument){
		var self = this;

		if(this.http.action == 'login'){return};

		return this.session('userInfo').then(function(data){
			if(isEmpty(data)){

				if(self.isAjax()){
					return self.error(403,'not login');
				}

				return self.redirect('/admin/index/login')
			}
			self.assign('userInfo',data);
		});
	}
}); 