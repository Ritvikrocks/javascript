let mySym=Symbol("key1")
let mysym2=Symbol("hello")
let Js={
    name:"ritvik",
    "fullname":"ritvik bhatnagar",
    mySym:"mykey1",//like this the datatype will show string so u should use the brackets
    [mysym2]:"hello world",
    location:"tumkur"
    }
    console.log(Js.location)
    console.log(Js["fullname"])
    // console.log(Js.full name) cannot be accessed using the dot, hence you generally access it using the brackets
    console.log(typeof(Js.mySym))//you cannot access the variavble using the dot, you need to use the bracket, the data type shows as string
    console.log(Js[mysym2])