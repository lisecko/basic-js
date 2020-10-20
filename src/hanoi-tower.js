const CustomError = require("../extensions/custom-error");


let turn = 0;

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  Hanoy(disksNumber, 1, 2, 3)

  let obj = {
    turns: turn, 
    seconds: Math.floor(turn * ((turnsSpeed / 60) / 60))
  };
  return obj

};

function Hanoy(n, i, p, v)
{
           if (n>0) {
               // Перекладываем сначала стопку из n-1 элементов на вспомогательный стержень.
               // А стержень приёмник играет пока роль вспомогательного.
               Hanoy(n - 1, i, v, p);
               // Перекладываем самый большой диск из стержня-источника на стержень-приёмник.
               turn++
               // Перекладываем стопку из n-1 элементов уже на стержень-приёмник.
               // А стержень-источник играет пока роль вспомогательного.
               Hanoy(n - 1, v, p, i);
           }
           return true;
 }