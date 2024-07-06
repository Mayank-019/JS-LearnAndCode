const accountId = 144553
let accountEmail = "mayank.kanojia11@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"       // possible but not good practice
let accountState;

// accountId = 2 --> not allowed

accountEmail = "mk@mk.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId)

/*
    Prefer not to use var keyword.
    Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])