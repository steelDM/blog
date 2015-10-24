module.exports = Controller('Admin/BaseController',{
	indexAction:function(){
		var userInfo = this.assign('userInfo');
		this.json(userInfo);
	},
	loginAction:function(){
		if(this.isGet()){
			return this.display('Admin/login.html')
		}

		var username = this.post('username');
		var password = this.post('password');
		var self = this;

		if(username === 'admin' && password === 'admin'){
			return this.session('userInfo',{username:username}).then(function(){
				self.redirect('/admin/');
			})
		}

		this.error(101,'用户名或者密码错误');
	}	
});