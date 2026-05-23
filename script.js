
const paragrafo = document.getElementById("texto");
const botao = document.getElementById("botao");

botao.onclick=()=>{
  paragrafo.textContent= paragrafo.textContent==="I am 19 years old, student. I work with programming, front-end. More than just writing code, I really like playing with the tools: testing and discovering what each one does and seeing how far I can get with them. I think this is how we really learn and are able to create more creative and efficient solutions. I like to keep everything beautiful, organized and working perfectly, always wanting to explore something new. I try to do everything in the best way that satisfies the customer."?"Tenho 19 anos. Sou estudante e trabalho com programação, front-end. Mais do que só escrever código, gosto mesmo é de brincar com as ferramentas: testar, fuçar, descobrir o que cada uma faz e ver até onde consigo chegar com elas. Acho que é assim que aprendemos de verdade e conseguimos criar soluções mais criativas e eficientes. Gosto de deixar tudo bonito, organizado e funcionando perfeitamente, sempre com desejo de explorar algo novo. Procuro fazer tudo da melhor forma, que satisfaça o cliente.":"I am 19 years old, student. I work with programming, front-end. More than just writing code, I really like playing with the tools: testing and discovering what each one does and seeing how far I can get with them. I think this is how we really learn and are able to create more creative and efficient solutions. I like to keep everything beautiful, organized and working perfectly, always wanting to explore something new. I try to do everything in the best way that satisfies the customer.";
}
const tb = document.getElementById("rmd");
const trd = document.getElementById("trd1");
trd.onclick=()=>{
  tb.textContent= tb.textContent==="A simple website made for a psychologist, using HTML, CSS and Java Script."?"Um site simples feito para um psicólogo, usando HTML, CSS e Java Script.":"A simple website made for a psychologist, using HTML, CSS and Java Script.";
}