var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var WheelView = (function (_super) {
    __extends(WheelView, _super);
    function WheelView() {
        var _this = _super.call(this) || this;
        /*加载皮肤*/
        _this.skinName = 'resource/eui_skins/WheelView.exml';
        return _this;
    }
    WheelView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    WheelView.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        //让按钮可点击
        this.mbtnGift.touchEnabled = true;
        //事件委托
        // this.mbtnGift.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Whirl,this);
        this.mbtnGift.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var theBtn = e.target;
            // 在点击触发这个事件的时候,点击的那个btn已经变成了选中状态
            if (theBtn.selected && theBtn.selected != undefined) {
                _this.Whirl(theBtn);
                theBtn.selected = false;
            }
            else {
                // 当selected为false的时候,说明按钮在点击之前就是选中状态
                // 点击后变成了false,所以这里改回选中状态
                theBtn.selected = true;
            }
        }, this);
    };
    WheelView.prototype.Whirl = function (btn) {
        btn.selected = true; /*将传进来的按钮状态改为true*/
        console.log('1');
    };
    return WheelView;
}(eui.Component));
__reflect(WheelView.prototype, "WheelView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=WheelView.js.map