* c# 读取ini配置文件
* 代码基于.net2.0，不依赖任何库，所有c# 版本均可使用，包括 unity
* 支持注释，// 和 /\* */ 两种均可使用
* 可以根据当前数据返回ini文件内容

####**使用示例（c#控制台项目）**

```csharp
using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
class Program {
    static void Main(string[] args) {
        try {
            var file = Path.Combine(Environment.CurrentDirectory, "../../../sample.ini");
            ScorpioIni ini = new ScorpioIni(file, Encoding.UTF8);
            Console.WriteLine(ini.Get("key1"));
            Console.WriteLine(ini.Get("sec1", "key1"));
            Console.WriteLine(ini.GetString());
        } catch (Exception e) {
            Console.WriteLine("error : " + e.ToString());
        }
        Console.ReadKey();
    }
}
```
####**ini文件**

```ini
//  // 和 /* */ 可以当作注释
/*这种是默认命名空间*/
key1 = value1

[sec1]
//这种是sec1里的值
key1 = value1sec1

```