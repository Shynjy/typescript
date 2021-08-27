(function () {

  let canal: string = "NerdCast";
  // let inscritos: number = 610234;

  // canal = inscritos;

  console.log(canal);


  function saudar(isManha: boolean, horas: number): string {
    let a = horas;
    let saudacao: string;
    if(isManha) {
      saudacao = `Bom dia são ${a}hr(s)`;
    } else {
      saudacao = "Tenha um bom dia!"
    }
    return saudacao;
  }

  console.log(saudar(true, 8));

})();