class WheelView extends eui.Component implements  eui.UIComponent {

	public WheelViewSkin:eui.Image; //对应eui文件中对应的类名
	public mbtnGift:eui.ToggleButton;  //免费抽奖的按钮
	public select:eui.Image;  //扇形选中框
	public arrow:eui.Image;  //箭头

	public constructor() {
		super();
		/*加载皮肤*/
		this.skinName = 'resource/eui_skins/WheelView.exml';
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		//让按钮可点击
		this.mbtnGift.touchEnabled = true;
		//事件委托
		// this.mbtnGift.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Whirl,this);
		this.mbtnGift.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
			let theBtn = <eui.ToggleButton>e.target;
			//在点击触发这个事件的时候,点击的那个btn已经变成了选中状态
			if(theBtn.selected && theBtn.selected != undefined){  //判断theBtn是否存在theBtn.selected属性且为true
				this.Whirl(theBtn);
				theBtn.selected = false;
			}else{
				//当selected为false的时候,说明按钮在点击之前就是选中状态
				theBtn.selected = true;
			}
		},this);
	}

	public Whirl(btn:eui.ToggleButton){
		btn.selected = true;  //将传进来的按钮状态改为true
		// console.log('1');
		//1.旋转
		let arrGift = ['惊喜大礼','3000金币','5000金币','钻石x2','道具礼包','钻石x1','500金币','记事本x1'];
		let deg = 45, //选装的默认角度
			whirlDeg = 0, //记录上次旋转停止的时候的角度
			now = 0, //旋转停下后对应的数组的位置
			isWhirl = false; //判断是否在旋转
		window.onload = function(){
			//2.获取对象,开始执行
			// ???
			if(isWhirl) return;
			isWhirl = true;
			var index = Math.floor(Math.random() * 8);
			now += index; //获得本次位置
			whirlDeg += now * deg + Math.floor(Math.random() * 3 +1) * 360; //转几圈
			egret.Tween.get().to({rotation:whirlDeg},5000); //转
			setTimeout(function(){
				if(now > 8) now = now % 8;
				alert(arrGift[now]);
				isWhirl = false;
			},5000);
		}
	}
}