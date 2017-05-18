(function () {
  var ipc = require('electron').ipcRenderer;
  var GlobalInfo=require('../../comm/globalInfo');
  new Vue({
    el: '#LogBody',
    data: {
      userName: '',
      pwd: ''
    },    
    methods: {
      logIn: function (event) {
        if(this.userName == '' || this.pwd == ''){
          alert('用户名或密码不能空白！');
        }
        else if (this.userName == 'admin' && this.pwd == '123') {
          alert(this.userName);
          GlobalInfo.userCode=this.userName;   
          alert(GlobalInfo.userCode);
          GlobalInfo.loginIP='';
          
          alert('ok');
          ipc.send('open-window','./htmljs/mainUI');
          ipc.send('close-window','loginUI');

          // var mainUI = require('./mainUI');
          // mainUI.Show();

          //opennewUI
          //查找数据库进行用户名和密码验证，需要传递通信数据，
          //异步通信，等待接收数据，界面layer，ok以后，怎么保存这个数据
          //直接global保存就可以的了，ranhou ,jiu yige xinde ui,
        }
        else {          
          alert('用户名或密码错误！');
        }
        // ipc.send('login-window-max');
      },
      logOut: function (event) {        
        alert('确定退出吗？');
        ipc.send('close-window','loginUI');
      }
    }
  })
})();