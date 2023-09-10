// const user: (string | number)[] = [1, "hc"]
// let tUser: [string, number, boolean];
// tUser = ["hc", 131, true];
// let rgb: [number, number, number] = [255, 123, 112];
// type User = [number, string];
// const newUser: User = [112, "example@google.com"];
// newUser[1] = "hc.com";
// // newUser.push(true);
// export {};
// Enums 
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
