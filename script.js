let opcao = ""


function triangulo(b, a){
    return ((b * a) / 2)
}

function retangulo(b, a){
    return (b * a)
}

function quadrado(l){
    return l*l
}

function trapesio(bMaior, bMenor, a){
    return ((bMaior + bMenor) * a) / 2
}

function circulo(raio){
    return 3.14 * (raio * raio)
}

do {
    opcao = prompt("Digite a opção desejada:\n1 - Área do triângulo\n2 - Área do retângulo\n3 - Área do quadrado\n4 - Área do trapézio\n5 - Área do círculo\n 6 - SAIR")
    switch (opcao) {
        case "1":
            let bTriangulo = prompt("Digite o valor da base (cm):")
            let aTriangulo = prompt("Digite o valor da altura (cm):")
            let resTriangulo = triangulo(bTriangulo , aTriangulo)
            alert("O resultado da área do triângulo é: " + resTriangulo + " cm")
            break

        case "2":
            let bRetangulo = prompt("Digite o valor da base (cm):")
            let aRetangulo = prompt("Digite o valor da altura (cm):")
            let resRetangulo = retangulo(bRetangulo , aRetangulo)
            alert("O resultado da área do retângulo é: " + resRetangulo + " cm")
            break

        case"3":
            let l = prompt("Digite o valor do lado do quadrado (cm):")
            let resQuadrado = quadrado(l)
            alert("O resultado da área do quadrado é: " + resQuadrado + " cm quadrados")
            break

        case "4":
            let bMaior = prompt("Digite o valor da base maior (cm):")
            let bMenor = prompt("Digite o valor da base menor (cm):")
            let a = prompt("Digite o valor da altura (cm):")
            let resTrapesio = trapesio(bMaior, bMenor, a)
            alert("O resultado da área do trapésio é: " + resTrapesio + " cm")
            break

        case "5":
            let raio = prompt("Digite o valor do raio do círculo (cm):")
            let resCirculo = circulo(raio)
            alert("O resultado da área do círculo é: " + resCirculo + "cm")

        case "6":
            break 

        default:
            alert("Opção inválida!!!")
    }

} while (opcao != 6)