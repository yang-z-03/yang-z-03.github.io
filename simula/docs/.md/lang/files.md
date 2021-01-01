# 文件和文件结构

.back Simula|./../../index.html
.back Simula 文档索引|./../index.html
.back 脚本语言参考|./index.html

.h 文件结构

## 文件结构

解释器会自动识别一个目录下的（工作目录）所有后缀名为 `.s` 的文件，并将其列入自己能够寻找类型和类型定义的工作空间。此外， Simula 还会识别后缀名为 `.sol` 的对象包（Simula Object Library）和后缀名为 `.sdl` 的动态链接库。解释器在显式说明下（在工作区文件中）会载入这些对象库，并在执行所有源码之前注册这些对象库中的对象。

一个源码文件是一个纯文本文件，里面包含多句可执行的代码段。在执行程序时，解释器会顺次（从上至下）执行相应的语句块。其中有四种语句可以直接操作当前解释器的行为。

下面是一个可用的 Simula 程序示例

```simula
option error resume
use sys
use math

module math.numerics

def class Rational
    def func init(float value)
        ...
    end
end

alert("Hello World")
```
