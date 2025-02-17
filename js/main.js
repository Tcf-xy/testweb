// JavaScript Document
//焦点图轮播
window.onload = function() {
	
	function hotChange() {
		var current_index = 0;
		var timer = window.setInterval(autoChange, 2000);
		var button_li = document.getElementById("button").getElementsByTagName("li");
		var pic_li = document.getElementById("banner_pic").getElementsByTagName("li");
		for (var i = 0; i < button_li.length; i++) {
			button_li[i].onmouseover = function() {
				if (timer) {
					clearInterval(timer);
				}
				for (var j = 0; j < pic_li.length; j++) {
					if (button_li[j] == this) {
						current_index = j;
						button_li[j].className = "current";
						pic_li[j].className = "current";
					} else {
						pic_li[j].className = "pic";
						button_li[j].className = "but";
					}
				}
			}
			button_li[i].onmouseout = function() {
				timer = setInterval(autoChange, 3000);
			}
		}
 
		function autoChange() {
			++current_index;
			if (current_index == button_li.length) {
				current_index = 0;
			}
			for (var i = 0; i < button_li.length; i++) {
				if (i == current_index) {
					button_li[i].className = "current";
					pic_li[i].className = "current";
				} else {
					button_li[i].className = "but";
					pic_li[i].className = "pic";
				}
			}
		}
	}
	hotChange();

}
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var email = document.getElementById('email').value;

    if (username.length < 3) {
        alert('用户名长度至少为3个字符，请重新输入');
        return false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('密码强度不足，至少8位且需包含大写字母、小写字母和数字，请重新输入');
        return false;
    }

    if (password!== confirmPassword) {
        alert('两次输入的密码不一致，请重新输入');
        return false;
    }
    if (!email.includes('@') ||!email.includes('.')) {
        alert('邮箱格式不正确，请重新输入');
        return false;
    }

    return true;
}