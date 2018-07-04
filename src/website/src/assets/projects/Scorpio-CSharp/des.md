* 此脚本是用作Unity游戏热更新使用的脚本
* 纯c#实现,最低支持.net3.5,兼容.net3.5以上所有平台
* 脚本语法类似 javascript

#### **源码目录说明**
* Script 文件是脚本的引擎对象
* Util 文件是一些常用的函数集合
* ScriptXXX 所有Script开头的类都是脚本内保存的对象
    * ScriptObject 所有脚本类都继承自此类
    * ScriptNull 空类型 null
    * ScriptBoolean bool 类型
    * ScriptNumber 数字类型 衍生出 ScriptNumberDouble，ScriptNumberInt，ScriptNumberLong 三个类
    * ScriptString 字符串类型
    * ScriptFunction 函数类型
    * ScriptArray 数组([])类型，相当于c#的List< ScriptObject >
    * ScriptTable table类型，相当于c#的Dictionary<object,ScriptObject>
    * ScriptEnum 处理所有c#内的枚举
    * ScriptUserdata 处理所有c#内的对象，衍生出所有Userdata目录下的类
* 子文件夹
    * CodeDom 此目录下全部都是解析脚本后生成的中间代码
    * Compiler 此目录下是脚本解释器
    * Exception 脚本引擎抛出的已知异常，例如解析失败，未支持语法等
    * Function 所有的函数类型，脚本函数，扩展函数等
    * Library 脚本内使用的库的源码，例如**json**,**array**,**table**,**string**,**math**库等，方便使用，初始化脚本时请调用 LoadLibrary 函数后方可使用
    * Runtime 此目录是运行 CodeDom 目录下的所有中间代码
    * Serialize 序列化字节码使用，把文本文件解析成二进制数据以及把二进制数据反序列化成文本文件
    * Userdata   此目录是根据c#代码内object的类型分别处理的代码，例如DefaultScriptUserdataDelegate是处理Delegate类型的对象，DefaultScriptUserdataObject是处理普通的c#对象，DefaultScriptUserdataEnum是处理枚举对象等
    * Variable 脚本内对象的差异化处理，例如ScriptNumberDouble，ScriptNumberInt，ScriptNumberLong三个类都是处理number类型，但是不同类型的处理方式不同

#### **Unity3d发布平台支持(亲测):**
* Web Player
* PC, Mac & Linux Standalone
* iOS(包括IL2CPP)
* Android(包括IL2CPP)
* BlackBerry
* Windows Phone 8
* Windows 10 (Universal Windows Platform)(包括IL2CPP)
* WebGL
* Tizen
* 理论上可以支持所有平台

#### **支持的unity版本**
* Unity3.x(没测试)
* Unity4.x(已亲测)
* Unity5.x(已亲测)

<!-- #### **语法测试(请使用支持 WebGL 的浏览器)** -->

<!-- <iframe src="project/Scorpio-CSharp/scriptconsole/index.html" frameborder='0'  width="970px" height="570px"></iframe> -->