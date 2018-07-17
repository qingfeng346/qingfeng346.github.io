* Unity 简单计时器
* 支持所有Unity版本
* 不依赖协层,使用Update实现
* 支持暂停，重置，销毁计时器
* 支持 GameTime(游戏时间), RealTime(Unity真实时间), ClockTime(本地时钟时间) 三种

####**使用方式:**
* **TimerManager.GetInstance().AddGameTimer**  ([计时器时间，单位秒], [计时器回调], [计时器参数,默认为null])
* **TimerManager.GetInstance().AddRealTimer**  ([计时器时间，单位秒], [计时器回调], [计时器参数,默认为null])
* **TimerManager.GetInstance().AddClockTimer** ([计时器时间，单位秒], [计时器回调], [计时器参数,默认为null])
* **LooperManager.GetInstance().MainLooper**   ([计时器回调], [计时器参数,默认为null]) 下一帧主线程调用回调
