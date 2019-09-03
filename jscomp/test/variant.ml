type v = | A | B of int | C of int * int

let a = A

let b = B 34

let c = C (4,2)

let () = Js.log2 "a" a
let () = Js.log2 "b" b
let () = Js.log2 "c" c

let foo = function
| A -> 1
| B n -> n
| C (n,m) -> n+m
