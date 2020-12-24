# 异常列表

.back Simula|./../../index.html
.back Simula 文档索引|./../index.html
.back 脚本语言参考|./index.html

.h 存在的异常

## 存在的异常

**#1** `FATAL` 在执行类对象的 `dir` 语句时出现异常退出

```simula
dir(global.int)
```

**#2** `EX` 已有类型的运算符不能重载，因为在查找运算符时优先级不正确，或者没有查找一个对象的所有字段 `_fields`

```simula
a = 0
a._add = "destroy the function _add"

alert(a + 1) ' this statement can still return the value 1.
```

.h 已修复的异常

## 已修复的异常

.h 在当前版本中被搁置的异常

## 在当前版本中被搁置的异常