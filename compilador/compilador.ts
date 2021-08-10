(function () {

  let canal: string = "NerdCast";
  let inscritos: number = 610234;

  // canal = inscritos;

  console.log(canal);


  function saudar(isManha: boolean, horas: number): string {
    let a = 1;
    let saudacao: string;
    if(isManha) {
      saudacao = "Bom dia!";
    } else {
      saudacao = "Tenha um bom dia!"
    }
    return saudacao;
  }

})();