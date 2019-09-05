type pair = int * int

type v = | A | B of int | C of int * int | D of pair

let a = A

let b = B 34

let c = C (4,2)

let d = D (4,2)

let () = Js.log2 "a" a
let () = Js.log2 "b" b
let () = Js.log2 "c" c
let () = Js.log2 "d" d

let foo = function
| A -> 1
| B n -> n
| C (n,m) -> n+m
| D (n,m) -> n+m
