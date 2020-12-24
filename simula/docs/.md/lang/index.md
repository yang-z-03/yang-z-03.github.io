# Simula 脚本语言参考

Simula 脚本语言采用了当前程序语言中许多通用的设计，并针对高精度的计算进行一些优化。

.cat 使用命令提示符输入命令|./repl.html
.cat 文件和文件结构|./files.html
.cat 基础数据类型|./types.html
.cat 程序控制和逻辑结构|./program_controls.html
.cat 运算符和基础运算操作|./operators.html
.cat 函数|./functions.html
.cat 类型和面对对象设计|./classes.html
.cat 继承和子类化|./inherit_and_categorizing.html
.cat 选择器|./selectors.html
.cat 类型转化和分类讨论|./casts.html
.cat 枚举常量|./enums.html

.back Simula|./../../index.html
.back Simula 文档索引|./../index.html

.a 基础数据类型|./types.html
系统和基础算数运算提供了与外部库无关的封闭类型，包括任意大整数 `int` ，有理数 `float` ，函数 `func` ，类型 `class` ，序列 `array` ，函数形式参数对 `pair` ，字符串 `string` 和 `null` 

.a 程序控制和逻辑结构|./program_controls.html
使用循环，条件判断和枚举实现程序控制结构

.a 函数|./functions.html
函数的定义和调用方法。参数的按对象声明，按值和按引用传递。在 Simula 中，函数是一种变量类型，你可以将函数作为参数传递到另一个函数，可以在动态上下文中调用抽象函数。以及介绍函数的重载，选择重载，提取参数，提取默认值，复合，嵌套，拓展四则运算等抽象函数功能

.a 类型和面对对象设计|./classes.html

.a 已发现的问题|./issues.html
在实现过程中已发现的致命或非致命的问题，这些问题与标准中描述的语法行为不符，往往是实现时出现的逻辑错误。这里列举出已发现并计划更改的异常列表。你可以在 Github Issues 上提出你所发现的异常，在注意到之后它会出现在这个列表里，并在修复后从列表项中移除。
