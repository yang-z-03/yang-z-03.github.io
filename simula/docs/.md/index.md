# 文档索引

.cat Simula 脚本语言|./lang/index.html
.back Simula|./../index.html

.a 脚本语言参考|./lang/index.html
在 Simula 中使用的脚本语言的简单介绍，区别性的语法说明和使用方法

```simula
def func _init_()
    a = int()
    b = ref(a)
    c = ref(b)

    alert(a); alert(b); alert(c)
    alert("byreference sending").select({ pair("any") })
end

def func another(val int byValue, int byName, ref int byRef, extends arr)
    return arr.get(0)
end
```







