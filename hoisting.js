
// var 关键字会出发hoisting 机制， let、const 块级作用域
function test(){
    if(false){
        var a = 'adfasf';
    }else{
        console.log(a); //undefined
    }
 return 'hahaha'
}
test();

function _test(){
    if(false){
        let a = 'adfasf';
    }else{
        console.log(a); //error
    }
 return 'hahaha'
}
test();

//常量必须赋值，不能更改
const abc = 1;
abc = 2 ; // error


// question
var func = []
for( var i = 0 ;i < 10 ; i++){
    func.push(function(){
        console.log(i);
    })
}
func.forEach(function(func){
	func();
});

// 循环中的函数都保留了 i 的引用 10次10

// slove before

var func = []
for( var i = 0 ;i < 10 ; i++){
    func.push(function(value){
        return function(){console.log(value)};
    }(i))
}

func.forEach(function(func){
	func();
});

// 循环中的函数都保留了 i 的一个副本 0 1 2 ... 9

// slove now

var func = []
for( let i = 0 ;i < 10 ; i++){
    func.push(function(){
        console.log(i)
    })
}

func.forEach(function(func){
	func();
});

// 循环中每次迭代都会创建一个新变量 0 1 2 ... 9



// const 循环
// for
for( const i = 0 ;i < 10 ; i++){
    console.log(i)  // error  i++ 第一次之后尝试修改常量
}
// for in
var funcs = [],
	object = {
		a:true,
        b:true,
		c:true,
    };
for(const key in object){
	funcs.push(function(){
		console.log(key) // 循环内部没有改变 key 的值 ， 会创建一个新绑定
    });
}
funcs.forEach(function(func){
	func(): // a , b , c
});


// const let 全局安全， 不会像 var 覆盖全局变量




