# 5 "others/map.cppo.ml"
type key = int
module I = Belt_internalMapInt    

# 11 "others/map.cppo.ml"
module N = Belt_internalAVLtree
module A = Belt_Array 

type 'a t = (key, 'a) N.t

let empty = N.empty      
let isEmpty = N.isEmpty
(* let singleton = N.singleton *)

let minKey = N.minKey
let minKeyUndefined = N.minKeyUndefined
let maxKey = N.maxKey
let maxKeyUndefined = N.maxKeyUndefined
let minimum = N.minimum
let minUndefined = N.minUndefined
let maximum = N.maximum
let maxUndefined = N.maxUndefined
let forEachU = N.forEachU
let forEach = N.forEach
let mapU  = N.mapU                
let map  = N.map
let mapWithKeyU = N.mapWithKeyU 
let mapWithKey = N.mapWithKey
let reduceU = N.reduceU
let reduce = N.reduce               
let everyU = N.everyU
let every = N.every              
let someU = N.someU
let some = N.some                
let keepU = N.keepSharedU
let keep = N.keepShared 
let partitionU = N.partitionSharedU 
let partition = N.partitionShared
let size = N.size
let toList = N.toList
let toArray = N.toArray
let keysToArray = N.keysToArray
let valuesToArray = N.valuesToArray
let checkInvariantInternal = N.checkInvariantInternal

let rec set  t (newK : key) (newD : _)  = 
  match N.toOpt t with
  | None -> 
    N.singleton newK newD
  | Some n  ->
    let k = N.keyGet n in 
    if newK = k then
      N.return (N.updateValue n newD)
    else
      let v = N.valueGet n in 
      if newK < k then
        N.bal (set (N.leftGet n) newK newD) k v (N.rightGet n)
      else
        N.bal (N.leftGet n) k v (set (N.rightGet n) newK newD)
        
let rec updateU  t (x : key) f  = 
  match N.toOpt t with
  | None -> 
    begin match f None [@bs] with 
    | None -> t 
    | Some data -> 
      N.singleton x data 
    end 
  | Some n  ->
    let k = N.keyGet n in 
    if x = k then
      begin match f (Some (N.valueGet n)) [@bs] with 
      | None ->
        let l, r = N.leftGet n, N.rightGet n in
        begin match N.toOpt l, N.toOpt r with
          | None, _ -> r
          | _, None -> l
          | _, Some rn ->
            let kr, vr = ref (N.keyGet rn), ref (N.valueGet rn) in
            let r = N.removeMinAuxWithRef rn kr vr in
            N.bal l kr.contents vr.contents r 
        end
      | Some data -> N.return (N.updateValue n data )
      end 
    else
      let l,r,v = N.leftGet n, N.rightGet n , N.valueGet n in 
      if x < k then
        let ll = (updateU l x f) in
        if l == ll then t 
        else N.bal ll  k v r
      else
        let rr = (updateU r x f) in
        if r == rr then t 
        else N.bal l k v rr 

let update t x f = updateU t x (fun[@bs] a -> f a)
    
let rec removeAux n (x : key) = 
    let l,v,r = N.(leftGet n, keyGet n, rightGet n) in 
    if x = v then
      match N.toOpt l, N.toOpt r with
      | None, _ -> r 
      | _, None -> l 
      | _, Some rn -> 
        let kr, vr = ref (N.keyGet rn), ref (N.valueGet rn) in 
        let r = N.removeMinAuxWithRef rn kr vr in 
        N.bal l kr.contents vr.contents r 
    else if x < v then
      match N.toOpt l with 
      | None -> N.return n
      | Some left -> 
        let ll = removeAux left x in 
        if ll == l then N.return n 
        else N.(bal ll v (valueGet n) r)
    else
      match N.toOpt r with 
      | None -> N.return n 
      | Some right -> 
        let rr = removeAux right x  in 
        N.bal l v (N.valueGet n) rr

let remove n x = 
  match N.toOpt n with 
  | None -> N.empty
  | Some n -> removeAux n x 

let rec removeMany0 t xs i len  =
  if i < len then
    let ele = A.getUnsafe xs i in
    let u =  removeAux t ele  in
    match N.toOpt u with
    | None -> u
    | Some t -> removeMany0 t xs (i + 1) len
  else
    N.return t
      
let removeMany t keys =
  let len = A.length keys in
  match N.toOpt t with
  | None -> N.empty
  | Some t ->  removeMany0 t keys 0 len

let findFirstByU = N.findFirstByU
let findFirstBy = N.findFirstBy 

let mergeMany h arr =   
  let len = A.length arr in 
  let v = ref h in  
  for i = 0 to len - 1 do 
    let key,value = A.getUnsafe arr i in 
    v.contents<- set v.contents key value
  done ;
  v.contents 

(* let mergeArray = mergeMany *)

let has = I.has
let cmpU = I.cmpU
let cmp = I.cmp
let eqU = I.eqU
let eq = I.eq
let get = I.get
let getUndefined = I.getUndefined
let getWithDefault = I.getWithDefault 
let getExn = I.getExn
let split = I.split
let mergeU = I.mergeU 
let merge = I.merge 
let fromArray = I.fromArray
