"use strict";
class Calculadora {
    state;

    op1; op1Num;
    op2; op2Num;
    operator;
    res; resNum;

    MEMORIA;

    constructor (){
        this.state = "FINISHED_OPERATION";
        this.op1 = "0";
        this.op1Num = new Number("0");
        this.op2 = "0";
        this.op2Num = new Number("0");
        this.operator = null;
        this.res = "0";
        this.resNum = new Number("0");
        this.MEMORIA = new Number("0");
    }

    digitos(n){
        if(this.state == "FINISHED_OPERATION") {
            if(this.op1 == "0") {
                this.op1 = n;
                document.getElementsByTagName("input")[0].value = this.op1;
                this.state = "OP1_INT_CONSTR";
            }
        } 
        
        else if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR") {
            if(this.op1 == "0") {
                this.op1 = n;
                document.getElementsByTagName("input")[0].value = this.op1;
            } else {
                this.op1 = document.getElementsByTagName("input")[0].value + n;
                document.getElementsByTagName("input")[0].value = this.op1;
            }
        }

        else if(this.state == "OPERATOR_CHANGE") {
            this.op2 = n;
            document.getElementsByTagName("input")[0].value = this.op2;
            this.state = "OP2_INT_CONSTR";
        } 

        else if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR") {
            if(this.op2 == "0") {
                this.op2 = n;
                document.getElementsByTagName("input")[0].value = this.op2;
            } else {
                this.op2 = document.getElementsByTagName("input")[0].value + n;
                document.getElementsByTagName("input")[0].value = this.op2;
            } 
        }

        else if(this.state = "CALCULATED") {
            var ope = this.operator;
            var o2 = this.op2;
            this.borrar();
            this.operator = ope;
            this.op2 = o2;
            this.digitos(n);
        }

    }

    punto(){
        if(this.state == "OP1_INT_CONSTR") {
            this.op1 += ".";
            this.state = "OP1_DOU_CONSTR";
            document.getElementsByTagName("input")[0].value = this.op1;
        }

        else if(this.state == "OP2_INT_CONSTR") {
            this.op2 += ".";
            this.state = "OP2_DOU_CONSTR";
            document.getElementsByTagName("input")[0].value = this.op2;
        }

        else if(this.state == "OPERATOR_CHANGE") {
            this.op2 = "0.";
            this.state = "OP2_DOU_CONSTR";
            document.getElementsByTagName("input")[0].value = this.op2;
        }

        else if(this.state == "CALCULATED" || this.state == "FINISHED_OPERATION") {
            this.op1 = "0.";
            this.state = "OP1_DOU_CONSTR";
            document.getElementsByTagName("input")[0].value = this.op1;
        }

    }

    suma() {

        if(this.state == "OPERATOR_CHANGE") {
            this.operator = "+";
        }

        else if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR") {
            this.operator = "+";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR") {
            this.igual();
            this.operator = "+";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "CALCULATED") {
            this.operator = "+";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }

    }

    resta() {
        if(this.state == "OPERATOR_CHANGE") {
            this.operator = "-";
        }

        else if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR") {
            this.operator = "-";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR") {
            this.igual();
            this.operator = "-";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "CALCULATED") {
            this.operator = "-";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }

    }

    multiplicacion() {
        if(this.state == "OPERATOR_CHANGE") {
            this.operator = "x";
        }

        else if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR") {
            this.operator = "x";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR") {
            this.igual();
            this.operator = "x";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "CALCULATED") {
            this.operator = "x";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }

    }

    division() {
        if(this.state == "OPERATOR_CHANGE") {
            this.operator = "÷";
        }

        else if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR") {
            this.operator = "÷";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR") {
            this.igual();
            this.operator = "÷";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "CALCULATED") {
            this.operator = "÷";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }
    }

    igual() {
        if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR") {

            this.op1Num = new Number(this.op1);
            this.op2Num = new Number(this.op2);
            
            try {
                if(this.operator == "+")
                    this.resNum = eval(this.op1Num + this.op2Num);
                else if(this.operator == "-")
                    this.resNum = eval(this.op1Num - this.op2Num);
                else if(this.operator == "x")
                    this.resNum = eval(this.op1Num * this.op2Num);
                else if(this.operator == "÷")
                    this.resNum = eval(this.op1Num / this.op2Num);
            } catch(err) {
                alert("Error: " + err);
            }

            this.res = this.resNum;
            document.getElementsByTagName("input")[0].value = this.res;
            this.state = "CALCULATED";
        }

        else if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR") {
            if(this.operator != null) {
                this.op1Num = new Number(this.op1);
                this.op2Num = new Number(this.op2);

                try {
                    if(this.operator == "+")
                        this.resNum = eval(this.op1Num + this.op2Num);
                    else if(this.operator == "-")
                        this.resNum = eval(this.op1Num - this.op2Num);
                    else if(this.operator == "x")
                        this.resNum = eval(this.op1Num * this.op2Num);
                    else if(this.operator == "÷")
                        this.resNum = eval(this.op1Num / this.op2Num);
                } catch(err) {
                    alert("Error: " + err);
                }

                this.res = this.resNum;
                document.getElementsByTagName("input")[0].value = this.res;
                this.state = "CALCULATED";
            }
        }

        else if(this.state == "CALCULATED") {
            this.op1Num = new Number(this.res);
            this.op2Num = new Number(this.op2);

            try {
                if(this.operator == "+")
                    this.resNum = eval(this.op1Num + this.op2Num);
                else if(this.operator == "-")
                    this.resNum = eval(this.op1Num - this.op2Num);
                else if(this.operator == "x")
                    this.resNum = eval(this.op1Num * this.op2Num);
                else if(this.operator == "÷")
                    this.resNum = eval(this.op1Num / this.op2Num);
            } catch(err) {
                alert("Error: " + err);
            }

            this.res = this.resNum;
            document.getElementsByTagName("input")[0].value = this.res;
            this.state = "CALCULATED";
        }

        else if(this.state == "OPERATOR_CHANGE") {
            this.op2 = this.op1;

            this.op1Num = new Number(this.op1);
            this.op2Num = new Number(this.op2);

            try {
                if(this.operator == "+")
                    this.resNum = eval(this.op1Num + this.op2Num);
                else if(this.operator == "-")
                    this.resNum = eval(this.op1Num - this.op2Num);
                else if(this.operator == "x")
                    this.resNum = eval(this.op1Num * this.op2Num);
                else if(this.operator == "÷")
                    this.resNum = eval(this.op1Num / this.op2Num);
            } catch(err) {
                alert("Error: " + err);
            }

            this.res = this.resNum;
            document.getElementsByTagName("input")[0].value = this.res;
            this.state = "CALCULATED";
        }

        else if(this.state == "FINISHED_OPERATION") {
            this.state = "CALCULATED";
        }

    }

    borrar() {
        this.state = "FINISHED_OPERATION";
        this.op1 = "0";
        this.op1Num = new Number("0");
        this.op2 = "0";
        this.op2Num = new Number("0");
        this.operator = null;
        this.res = "0";
        this.resNum = new Number("0");
        document.getElementsByTagName("input")[0].value = "0";
    }

    borrarPantalla() {
        if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR" || this.state == "FINISHED_OPERATION") {
            if(this.state == "FINISHED_OPERATION")
                this.digitos(0);
            else {
                this.op1 = "0";
                document.getElementsByTagName("input")[0].value = this.op1;
                this.state = "OP1_INT_CONSTR";
            }
        }

        else if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR" || this.state == "OPERATOR_CHANGE") {
            if(this.state == "OPERATOR_CHANGE")
                this.digitos(0);
            else {
                this.op2 = "0";
                document.getElementsByTagName("input")[0].value = this.op2;
                this.state = "OP2_INT_CONSTR";
            }
        }

        else if(this.state == "CALCULATED") {
            this.resNum = new Number('0');

            this.res = this.resNum;
            document.getElementsByTagName("input")[0].value = this.res;
        }

    }

    porcentaje() {
        if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR" || this.state == "OPERATOR_CHANGE") {
            if(this.state == "OPERATOR_CHANGE") {
                this.state = "OP2_INT_CONSTR";
                this.op2 = "0";
            }
           
            try {
                if(this.operator == "+" || this.operator == "-") {
                    this.op2 = eval(this.op1 * this.op2 / 100);
                    this.igual();
                } else if(this.operator == "x" || this.operator == "÷") {
                    this.op2 = eval(this.op2 / 100);
                    this.igual();
                }
            } catch(err) {
                alert("Error: " + err);
            }
        }
    }

    raiz() {
        if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR" || this.state == "FINISHED_OPERATION") {
            var raiz = Math.sqrt(new Number(this.op1));

            if(raiz % 1 == 0)
                this.state = "OP1_INT_CONSTR";
            else
                this.state = "OP1_DOU_CONSTR"; 

            this.op1 = raiz;
            document.getElementsByTagName("input")[0].value = this.op1;
        } else if (this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR" || this.state == "OPERATOR_CHANGE") {
            var raiz = Math.sqrt(new Number(this.op2));

            if(raiz % 1 == 0)
                this.state = "OP2_INT_CONSTR";
            else
                this.state = "OP2_DOU_CONSTR"; 

            this.op2 = raiz;
            document.getElementsByTagName("input")[0].value = this.op2;
        } else if(this.state == "CALCULATED") {
            this.resNum = Math.sqrt(new Number(this.resNum));

            this.res = this.resNum;
            document.getElementsByTagName("input")[0].value = this.res;
        }
    }

    masMenos() {
        if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR") {
            if(this.op1 != "0") {
                this.op1 *= -1;
                document.getElementsByTagName("input")[0].value = this.op1;
            }
        }

        else if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR") {
            if(this.op2 != "0") {
                this.op2 *= -1;
                document.getElementsByTagName("input")[0].value = this.op2;
            }
        }

        else if(this.state == "OPERATOR_CHANGE") {
            this.digitos(this.op1 * -1);
        }

        else if(this.state == "CALCULATED") {
            this.resNum *= -1;

            this.res = this.resNum;
            document.getElementsByTagName("input")[0].value = this.res;
        }
    }

    Mrc() {
        if(this.state == "CALCULATED" || this.state == "FINISHED_OPERATION") {
            document.getElementsByTagName("input")[0].value = "M " + this.MEMORIA;
        }

        else if((this.state == "OP1_INT_CONSTR" && this.op1 == "0") || (this.state == "OP1_DOU_CONSTR" && this.op1 == "0.")) {
            this.op1 = this.MEMORIA;
            document.getElementsByTagName("input")[0].value = this.op1;
            if(this.op1 % 1 != 0)
                this.state = "OP1_DOU_CONSTR";
        }

        else if((this.state == "OP2_INT_CONSTR" && this.op2 == "0") || (this.state == "OP2_DOU_CONSTR" && this.op2 == "0.") || this.state == "OPERATOR_CHANGE") {
            this.op2 = this.MEMORIA;
            document.getElementsByTagName("input")[0].value = this.op2;
            if(this.op2 % 1 == "0")
                this.state = "OP2_INT_CONSTR";    
            else
                this.state = "OP2_DOU_CONSTR";
        }
    }

    mMenos() {
        this.igual();
        this.MEMORIA -= this.resNum;
        document.getElementsByTagName("input")[0].value = "M " + this.res;
    }

    mMas() {
        this.igual();
        this.MEMORIA += this.resNum;
        document.getElementsByTagName("input")[0].value = "M " + this.res;
    }

    receiveKeyPressed(e) {
        if (e == "Escape")
            this.borrar();
        else if(e == "1")
            this.digitos(1);
        else if(e == "2")
            this.digitos(2);
        else if(e == "3")
            this.digitos(3);
        else if(e == "4")
            this.digitos(4);
        else if(e == "5")
            this.digitos(5);
        else if(e == "6")
            this.digitos(6);
        else if(e == "7")
            this.digitos(7);
        else if(e == "8")
            this.digitos(8);
        else if(e == "9")
            this.digitos(9);
        else if(e == "0")
            this.digitos(0);
        else if(e == ".")
            this.punto();
        else if(e == "+")
            this.suma();
        else if(e == "-")
            this.resta();
        else if(e == "*")
            this.multiplicacion();
        else if(e == "/")
            this.division();
        else if(e == "=")
            this.igual();
        else if(e == "%")
            this.porcentaje();
        else if(e == "r" || e == "R")
            this.raiz();
        else if(e == "s" || e == "S")
            this.masMenos();
        else if(e == "e" || e == "E")
            this.borrarPantalla();
        else if(e == "m" || e == "M")
            this.Mrc();
        else if(e == ">")
            this.mMas();
        else if(e == "<")
            this.mMenos();
    }

}

class CalculadoraCientifica extends Calculadora {
    
    array           // Contiene los números y signos a nivel interno
    counter         // Puntero a la última posición efectiva del array
    indexSign       // Contiene las posiciones de la pantalla en la que se encuentran los símbolos
    isPointer       // Puntero a la última posición efectiva de indexSign
    lastOperator    // Último operador empleado
    lastOperand     // Último operando empleado
    parI            // Contiene las posiciones de la pantalla en la que se encuentran (
    cI              // Puntero a la última posición de parI
    pantalla        // String que representa el contenido de la pantalla
    shft            // Representa si el shift está o no pulsado
    hyp             // Representa si la tecla hyp está o no pulsada
    memory          // Array con todas las memorias guardadas
    pMem            // Puntero que apunta a la memoria actual
    fe              // Representa si la tecla F-E está o no pulsada
    deg             // Representa si vemos ciertos resultados en grados (true) o radianes (false)
    editable        // Para indicar si podemos añadir dígitos al operando actual o no (sirve por ejemplo con pi, o con resultados)
    chainedEquals   // Para indicar que se ha encadenado la pulsación de la tecla =

    constructor() {
        super()
        this.array = []
        this.array[0] = 0
        this.counter = 0
        this.indexSign = []
        this.indexSign[0] = 0
        this.isPointer = 0
        this.lastOperator = null
        this.lastOperand = null
        this.parI = []
        this.cI = -1
        this.pantalla = "0"
        this.shft = false;
        this.hyp = false;
        this.memory = []
        this.pMem = -1
        this.fe = false;
        this.deg = true;
        this.editable = true;
        this.chainedEquals = false;
    }

    digitos(n) {
        this.chainedEquals = false

        if(!this.editable)
            this.borrarHastaUltimoSimbolo()

        // Caso para cuando en pantalla solo hay un 0 -> Se sustituye por la entrada
        if(this.array[this.counter] == "0") {
            this.array[this.counter] = n
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1) + "" + n
            document.getElementsByTagName("input")[0].value = this.pantalla;
        } 
        // Caso para cuando el elemento sobre el que estamos es un número -> Se concatena
        else if(! isNaN(this.array[this.counter])) {
            this.array[this.counter] += "" + n
            this.pantalla += "" + n
            document.getElementsByTagName("input")[0].value = this.pantalla
        }
        // Caso para cuando hay un operador binario justo antes -> Crea un nuevo operando
        else if(this.isBinaryOperator(this.array[this.counter])) {
            this.counter++
            this.array[this.counter] = n
            this.pantalla += "" + n
            document.getElementsByTagName("input")[0].value = this.pantalla
        }
        this.editable = true
    }

    // Devuelve si el operando pasado es de una operación binaria (según con los que trabajamos)
    isBinaryOperator(str) {
        if(str == "+" || str == "-" || str == "*" || str == "/" || str == "e" || str == "%" || str == "**")
            return true
        return false
    }

    // Devuelve si el operando pasado es de una operación binaria (según los caracteres mostrados por pantalla)
    isBinaryOperatorOnScreen(str) {
        if(str == "+" || str == "-" || str == "x" || str == "÷" || str == "e" || str == "%" || str == "^")
            return true
        return false
    }

    suma() { this.opBinaria("+", "+") }

    resta() { this.opBinaria("-", "-") }

    multiplicacion() { this.opBinaria("*", "x") }

    division() { this.opBinaria("/", "÷") }

    exponencial() { this.opBinaria("e", "e") }

    modulo() { this.opBinaria("%", "%") }

    potencia() { this.opBinaria("**", "^") }
    
    opBinaria(simboloInterno, reprPantalla) {
        this.chainedEquals = false

        // Caso para cuando tenemos un operando justo antes -> Se registra y muestra el símbolo
        if(! isNaN(this.array[this.counter])) {
            this.adjust()

            this.counter++
            this.array[this.counter] = simboloInterno

            this.pantalla += reprPantalla
            document.getElementsByTagName("input")[0].value = this.pantalla

            this.isPointer++
            this.indexSign[this.isPointer] = this.pantalla.length
        } 
        // Caso para cuando tenemos un operador justo antes -> Se sustituye
        else if(this.isBinaryOperator(this.array[this.counter])) {
            this.array[this.counter] = simboloInterno

            this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1) + reprPantalla
            document.getElementsByTagName("input")[0].value = this.pantalla
        }
        this.editable = true
    }

    punto() {
        if(!this.editable)
            this.borrarHastaUltimoSimbolo()

        // Caso para cuando tenemos un operando -> Comprobamos y añadimos el punto si procede
        if(! isNaN(this.array[this.counter])) {
            if(!this.haveDot(this.array[this.counter])) {
                this.array[this.counter] += "."

                this.pantalla += "."
                document.getElementsByTagName("input")[0].value = this.pantalla
            }
        } 
        // Caso para cuando tenemos un operador justo antes -> Se añade 0 y luego el punto
        else if(this.isBinaryOperator(this.array[this.counter])) {
            this.digitos(0)
            this.punto();
        }
        this.editable = true
    }

    // Devuelve si el número pasado por parámetro contiene un .
    haveDot(n) {
        var separated = (n + "").split(".")
        if(separated[1] == null) return false;
        return true;
    }

    raiz() {
        // Caso para cuando tenemos un operando -> Calculamos directamente y mostramos
        if(! isNaN(this.array[this.counter])) {
            var res = new Number(Math.sqrt(new Number(this.array[this.counter])));
            this.opUnaria("op1", res)
        } 
        // Caso para cuando tenemos un operador -> Calculamos toda la expresión y aplicamos la operación sobre el resultado
        else if(this.isBinaryOperator(this.array[this.counter])) {
            this.opUnaria("op2", 0);
            this.raiz()
        }
        this.editable = false
    }

    potBase10() {
        // Caso para cuando tenemos un operando -> Calculamos directamente y mostramos
        if(! isNaN(this.array[this.counter])) {
            var res = new Number(Math.pow(new Number(10), new Number(this.array[this.counter])));
            this.opUnaria("op1", res)
        } 
        // Caso para cuando tenemos un operador -> Calculamos toda la expresión y aplicamos la operación sobre el resultado
        else if(this.isBinaryOperator(this.array[this.counter])) {
            this.opUnaria("op2", 0);
            this.potBase10()
        }
        this.editable = false
    }

    logaritmo() {
        // Caso para cuando tenemos un operando -> Calculamos directamente y mostramos
        if(! isNaN(this.array[this.counter])) {
            var res = new Number(Math.log10(new Number(this.array[this.counter])));
            this.opUnaria("op1", res)
        } 
        // Caso para cuando tenemos un operador -> Calculamos toda la expresión y aplicamos la operación sobre el resultado
        else if(this.isBinaryOperator(this.array[this.counter])) {
            this.opUnaria("op2", 0);
            this.logaritmo()
        }
        this.editable = false
    }

    potencia2() {
        // Caso para cuando tenemos un operando -> Calculamos directamente y mostramos
        if(! isNaN(this.array[this.counter])) {
            var res = new Number(Math.pow(new Number(this.array[this.counter]),2));
            this.opUnaria("op1", res)
        } 
        // Caso para cuando tenemos un operador -> Calculamos toda la expresión y aplicamos la operación sobre el resultado
        else if(this.isBinaryOperator(this.array[this.counter])) {
            this.opUnaria("op2", 0);
            this.potencia2()
        }
        this.editable = false
    }

    opUnaria(op, num) {
        // Común a operaciones unarias sobre número: guardado del cálculo, modificación de pantalla y mostrado
        if(op == "op1") {
            this.array[this.counter] = num + "";

            var lastParI = this.cI > new Number(-1) ? new Number(this.parI[this.cI]) : new Number(0)
            this.pantalla = this.pantalla.substring(0, Math.max(this.indexSign[this.isPointer], lastParI)) + "" + num;
            document.getElementsByTagName("input")[0].value = this.pantalla;
        } 
        // Común a operaciones unarias sobre operador: genera un operando y calcula su valor calculando la expresión actual
        else if(op == "op2") {
            this.digitos(num)
            this.introducirNumero(this.calculoSimpleExpresion())
        }
    }

    // Simula la pulsación de las teclas necesarias para la introducción del número pasado por parámetro
    introducirNumero(n) {
        var str = n + ""
        var i = 0
        var negative = false;

        while (i < str.length) {
            if(str.charAt(i) == ".") this.punto()
            else if(! isNaN(str.charAt(i))) this.digitos(new Number(str.charAt(i)))
            else negative = true
            i++
        }

        if(negative)
            this.masMenos()
    }

    sinArcHyp() {
        if(! isNaN(this.array[this.counter])) {
            var res = new Number(0);
            if(!this.shft && !this.hyp) {       // sin
                if(this.deg)
                    res = new Number(Math.sin(this.toRad(new Number(this.array[this.counter]))));
                else {
                    res = new Number(Math.sin(new Number(this.array[this.counter])));
                }
            } else if(this.shft && !this.hyp) { // asin
                if(this.deg)
                    res = new Number(this.toDeg(Math.asin(new Number(this.array[this.counter]))));
                else
                    res = new Number(Math.asin(new Number(this.array[this.counter])));
            } else if(!this.shft && this.hyp) { // sinh
                res = new Number(Math.sinh(new Number(this.array[this.counter])));
            } else if(this.shft && this.hyp) {  // asinh
                res = new Number(Math.asinh(new Number(this.array[this.counter])));
            }
            this.opUnaria("op1", res)
        } else if(this.isBinaryOperator(this.array[this.counter])) {
            this.opUnaria("op2", 0);
            this.sinArcHyp()
        }
        this.editable = false
    }

    cosArcHyp() {
        if(! isNaN(this.array[this.counter])) {
            var res = new Number(0);
            if(!this.shft && !this.hyp) {       // cos
                if(this.deg)
                    res = new Number(Math.cos(this.toRad(new Number(this.array[this.counter]))));
                else
                    res = new Number(Math.cos(new Number(this.array[this.counter])));
            } else if(this.shft && !this.hyp) { // acos
                if(this.deg)
                    res = new Number(this.toDeg(Math.acos(new Number(this.array[this.counter]))));
                else
                    res = new Number(Math.acos(new Number(this.array[this.counter])));
            } else if(!this.shft && this.hyp) { // cosh
                res = new Number(Math.cosh(new Number(this.array[this.counter])));
            } else if(this.shft && this.hyp) {  // acosh
                res = new Number(Math.acosh(new Number(this.array[this.counter])));
            }
            this.opUnaria("op1", res)
        } else if(this.isBinaryOperator(this.array[this.counter])) {
            this.opUnaria("op2", 0);
            this.cosArcHyp()
        }
        this.editable = false
    }

    tanArcHyp() {
        if(! isNaN(this.array[this.counter])) {
            var res = new Number(0);
            if(!this.shft && !this.hyp) {       // tan
                if(this.deg)
                    res = new Number(Math.tan(toRad(new Number(this.array[this.counter]))));
                else
                    res = new Number(Math.tan(new Number(this.array[this.counter])));
            } else if(this.shft && !this.hyp) { // atan
                if(this.deg)
                    res = new Number(this.toDeg(Math.atan(new Number(this.array[this.counter]))));
                else
                    res = new Number(Math.atan(new Number(this.array[this.counter])));
            } else if(!this.shft && this.hyp) { // tanh
                res = new Number(Math.tanh(new Number(this.array[this.counter])));
            } else if(this.shft && this.hyp) {  // atanh
                res = new Number(Math.atanh(new Number(this.array[this.counter])));
            }
            this.opUnaria("op1", res)
        } else if(this.isBinaryOperator(this.array[this.counter])) {
            this.opUnaria("op2", 0);
            this.tanArcHyp()
        }
        this.editable = false
    }

    toDeg(rad) {
        try{ return new Number(eval(new Number(rad) * new Number(180) / Math.PI)) } catch(err) { alert("Error: " + err) }
    }

    toRad(deg) {
        try{ return new Number(eval(new Number(deg) * Math.PI / new Number(180))) } catch(err) { alert("Error: " + err) }
    }

    masMenos() {
        // Caso para cuando tenemos un operando -> Calculamos directamente y mostramos
        if(! isNaN(this.array[this.counter])) {
            var res = new Number(new Number(this.array[this.counter]) * new Number(-1));
            this.opUnaria("op1", res)
        } 
        // Caso para cuando tenemos un operador -> Calculamos toda la expresión y aplicamos la operación sobre el resultado
        else if(this.isBinaryOperator(this.array[this.counter])) {
            this.opUnaria("op2", 0);
            this.masMenos()
        }
    }

    fact() {
        // Caso para cuando tenemos un operando -> Calculamos directamente y mostramos
        if(! isNaN(this.array[this.counter])) {
            var res = new Number(this.factorial(this.array[this.counter]));
            this.opUnaria("op1", res)
        } 
        // Caso para cuando tenemos un operador -> Calculamos toda la expresión y aplicamos la operación sobre el resultado
        else if(this.isBinaryOperator(this.array[this.counter])) {
            this.opUnaria("op2", 0);
            this.fact()
        }
        this.editable = false
    }

    factorial(n) {
        if(n == 0 || n == 1)
            return new Number(1);
        else 
            try { return new Number(eval(new Number(n) * this.factorial(n-1))) } catch(err) { alert("(X) Error: " + err) }
    }

    borrar() {
        super.borrar()
        this.array = []
        this.array[0] = 0
        this.counter = 0
        this.indexSign = []
        this.indexSign[0] = 0
        this.isPointer = 0
        this.lastOperator = null
        this.lastOperand = null
        this.parI = []
        this.cI = -1
        this.pantalla = "0"
        this.editable = true
        this.chainedEquals = false
    }

    // borra el último operando introducido
    borrarNumero() {
        // Si estamos sobre un operando, borra normal y deja el 0
        if(! isNaN(this.array[this.counter]) && this.array[this.counter] != "0") {
            this.borrarHastaUltimoSimbolo()
        }
        // Si estamos sobre un operador, pone un 0
        else if(this.isBinaryOperator(this.array[this.counter])) {
            this.digitos(0)
        }
        this.editable = true
    }

    // solo se llama cuando estamos sobre un dígito, lo pone a 0 y actualiza pantalla
    borrarHastaUltimoSimbolo() {
        if(isNaN(this.array[this.counter]))
            return

        this.array[this.counter] = "0"
        var lastSign = new Number(this.indexSign[this.isPointer])
        var lastParI = this.cI > new Number(-1) ? new Number(this.parI[this.cI]) : new Number(0)

        var pos = new Number(Math.max(lastSign, lastParI))
        
        this.pantalla = this.pantalla.substring(0, pos) + "0"
        document.getElementsByTagName("input")[0].value = this.pantalla
    }

    // borra digito a digito el último operando introducido
    borrarDigito() {
        if(!this.editable) return

        var actual = this.array[this.counter] + ""

        if(! isNaN(this.array[this.counter]) && this.array[this.counter] != "0") {
            // Caso en el que borramos un dígito de un número con un único dígito -> Se pone a 0
            if((this.array[this.counter] + "").length == 1) {
                this.array[this.counter] = "0"
                this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1) + "0"
                document.getElementsByTagName("input")[0].value = this.pantalla
            } 
            // Caso en el que borramos la última cifra de un número al que se le ha hecho +/- y tiene el - actualmente -> Se borra el -n y se pone a 0
            else if(actual.length == 2 && actual.substring(0,1) == "-") {
                this.array[this.counter] = 0
                this.pantalla = this.pantalla.substring(0, this.indexSign[this.isPointer]) + this.array[this.counter]
                document.getElementsByTagName("input")[0].value = this.pantalla
            } 
            // Caso en el que borramos un dígito de un número con más de un dígito -> Se elimina el último
            else {
                this.array[this.counter] = (this.array[this.counter] + "").substring(0, (this.array[this.counter] + "").length - 1)
                var lastParI = this.cI > new Number(-1) ? new Number(this.parI[this.cI]) : new Number(0)
                this.pantalla = this.pantalla.substring(0, Math.max(this.indexSign[this.isPointer], lastParI)) + this.array[this.counter]
                document.getElementsByTagName("input")[0].value = this.pantalla
            }
        }
    }

    shift() {
        if(this.shft) {
            this.shft = false;
            document.getElementsByTagName("input")[19].value = "↑"
        } else {
            this.shft = true;
            document.getElementsByTagName("input")[19].value = "↑*"
        }
    }

    hyperbolic() {
        if(this.hyp) {
            this.hyp = false;
            document.getElementsByTagName("input")[2].value = "HYP"
        } else {
            this.hyp = true;
            document.getElementsByTagName("input")[2].value = "HYP*"
        }
    }

    pi() {
        if(!this.editable)
            this.borrarHastaUltimoSimbolo()

        // Caso para cuando tenemos un operando -> Lo pisamos y ponemos PI
        if(! isNaN(this.array[this.counter])) {
            var res = new Number(Math.PI);
            this.opUnaria("op1", res)
        } 
        // Caso para cuando tenemos un operador -> Creamos dígito y llamada recursiva
        else if(this.isBinaryOperator(this.array[this.counter])) {
            this.digitos(0)
            this.pi()
        }
        this.editable = false
    }

    mMas() {
        if(this.pMem == -1) {this.pMem = 0; this.memory[this.pMem] = new Number(0) }

        // Caso para cuando tenemos un operando -> Lo sumamos a la memoria en la posición actual
        if(! isNaN(this.array[this.counter])) {
            try { this.memory[this.pMem] = new Number(eval(new Number(this.memory[this.pMem]) + new Number(this.array[this.counter]))) }
            catch(err) { alert("Error: " + err) }
        } 
        // Caso para cuando tenemos un operador -> Sumamos a la memoria en la posición actual el anterior operando
        else if(this.isBinaryOperator(this.array[this.counter])) {
            try { this.memory[this.pMem] = new Number(eval(new Number(this.memory[this.pMem]) + new Number(this.array[this.counter-1]))) }
            catch(err) { alert("Error: " + err) }
        }
    }

    mMenos() {
        if(this.pMem == -1) {this.pMem = 0; this.memory[this.pMem] = new Number(0) }

        // Caso para cuando tenemos un operando -> Lo restamos a la memoria en la posición actual
        if(! isNaN(this.array[this.counter])) {
            try { this.memory[this.pMem] = new Number(eval(new Number(this.memory[this.pMem]) - new Number(this.array[this.counter]))) }
            catch(err) { alert("Error: " + err) }
        } 
        // Caso para cuando tenemos un operador -> Restamos a la memoria en la posición actual el anterior operando
        else if(this.isBinaryOperator(this.array[this.counter])) {
            try { this.memory[this.pMem] = new Number(eval(new Number(this.memory[this.pMem]) - new Number(this.array[this.counter-1]))) }
            catch(err) { alert("Error: " + err) }
        }
    }

    mRead() {
        if(this.pMem == -1) {this.pMem = 0; this.memory[this.pMem] = new Number(0) }

        // Caso para cuando tenemos un operando -> Lo pisamos y ponemos la posición actual de memoria
        if(! isNaN(this.array[this.counter])) {
            var res = new Number(this.memory[this.pMem])
            this.opUnaria("op1", res)
        } 
        // Caso para cuando tenemos un operador -> Creamos dígito y llamada recursiva
        else if(this.isBinaryOperator(this.array[this.counter])) {
            this.digitos(0)
            this.mRead()
        }
        this.editable = false
    }

    mClear() {
        this.pMem = -1
        this.memory = []
    }

    mSave() {
        this.pMem += 1
        this.memory[this.pMem] = new Number(0)
    }

    nCientif() {
        this.fe = !this.fe
        this.modNumberCientif()
    }

    adjust() {
        this.fe = false
        this.modNumberCientif()
    }

    modNumberCientif() {
        // Caso para cuando tenemos un operando -> Lo pisamos y mostramos su notación correspondiente
        if(! isNaN(this.array[this.counter])) {
            if(this.fe)
                var res = new Number(this.array[this.counter]).toExponential()
            else
                var res = new Number(this.array[this.counter])

            this.opUnaria("op1", res)
        } 
        // Caso para cuando tenemos un operador -> Creamos dígito y mostramos el operando anterior
        else if(this.isBinaryOperator(this.array[this.counter])) {
            this.opUnaria("op2", 0)

            if(this.fe)
                var res = new Number(this.array[this.counter]).toExponential()
            else
                var res = new Number(this.array[this.counter])

            this.opUnaria("op1", res)
        }
        this.editable = false
    }

    degRad() {
        this.deg = !this.deg
        if(this.deg)
            document.getElementsByTagName("input")[1].value = "DEG"
        else
            document.getElementsByTagName("input")[1].value = "RAD"
    }

    parS() {
        this.chainedEquals = false

        // Cuando lo último que hay en pantalla es un signo, se añade un paréntesis y queda registrado
        if(this.indexSign[this.isPointer] == this.pantalla.length) {
            this.pantalla += "("
            document.getElementsByTagName("input")[0].value = this.pantalla
            this.cI++;
            this.parI[this.cI] = this.pantalla.length
            this.digitos(0)
        } 
        // Cuando lo último que tenemos es un operando, ponemos el paréntesis delante de este y después del último signo
        else if(! isNaN(this.array[this.counter])) {
            var actualN = this.array[this.counter]
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - (actualN + "").length)
            this.pantalla += "(" + actualN
            document.getElementsByTagName("input")[0].value = this.pantalla
            this.cI++;
            this.parI[this.cI] = this.pantalla.length - (actualN + "").length
        }
    }

    parE() {
        if(this.cI > -1) {
            // Si estamos sobre un signo, se escribe un 0 y se pisa con el resultado de la expresión dentro del paréntesis
            if(this.isBinaryOperator(this.array[this.counter])) {
                this.digitos(0)
                this.introducirNumero(this.calculoSimpleExpresion())
            }

            var resPar = this.calculoSimpleExpresion()
            var posI = this.parI[this.cI]
            var expresion = this.pantalla.substring(posI, this.pantalla.length)

            this.pantalla = this.pantalla.substring(0, posI - 1)
            document.getElementsByTagName("input")[0].value = this.pantalla

            var signs = this.contarSignos(expresion)
            try { this.actualizacionInterna(signs, new Number(eval(new Number(2) * signs + new Number(1)))) } catch(err) { alert("Error: " + err) }
            this.introducirNumero(resPar)

            this.editable = false
        }
    }

    actualizacionInterna(signs, numOfPositionsOfArray) {

        try {
            // actualización de this.array y this.counter
            var init = new Number(eval(this.counter - numOfPositionsOfArray + new Number(1)))
            var i = init
            while (i <= this.counter) {
                this.array[i] = null
                i++
            }
            this.counter = new Number(eval(init - 1))

            // arreglar el caso en que se necesita actualizar la información interna por un =
            if(this.counter < 0) {
                this.counter = 0
                this.array[0] = 0
            }

            // actualización de this.indexSign y this.isPointer
            var i2 = signs
            while(i2 > 0) {
                this.indexSign[eval(this.isPointer + 1 - i2)] = null
                i2--
            }
            this.isPointer = new Number(eval(this.isPointer - signs))

            // actualización de this.parI y this.cI
            if(this.cI > -1) {
                this.parI[this.cI] = null
                this.cI--
            }
        } catch(err) { 
            alert("Error: " + err) 
        }
    }

    calculoSimpleExpresion() {
        var i;
        this.adjust()

        try {
            // si hay algún paréntesis abierto, calcula lo de dentro del paréntesis (desde i = primera posición del primer operando dentro del paréntesis)
            if(this.cI > -1) {
                var expr = this.pantalla.substring(this.parI[this.cI], this.pantalla.length)
                var signs = new Number(this.contarSignos(expr))

                // en numOfPositionsOfArray tenemos el número de posiciones desde el final de this.array cuyo resultado debemos calcular
                var numOfPositionsOfArray = new Number(eval(new Number(2) * signs + new Number(1)))
                var i = new Number(eval(this.counter - numOfPositionsOfArray + new Number(1)))
            } 
            // si no hay paréntesis, calcula todo lo que hay (desde i = 0)
            else { 
                var i = new Number(0) 
            }
        } catch(err) { 
            alert("Error: " + err) 
        }

        var op = ""
        while (i <= this.counter) {
            op += "" + this.array[i]
            i++
        }

        try { return new Number(eval(op)) } catch(err) { alert("Error: " + err) }
        this.editable = false
    }

    contarSignos(expr) {
        var it = new Number(1) // uno para evitar la posibilidad de que se haya hecho +/- sobre el primer operando dentro del paréntesis
        var signs = new Number(0)
        var lastSing = false
        while(it < expr.length) {
            if(lastSing) { lastSing = false } 
            else if(this.isBinaryOperatorOnScreen(expr.substring(it, it + 1) + "")) {signs++; lastSing = true}
            it++
        }
        return signs
    }

    igual() {
        // No puede haber paréntesis por cerrar
        if(this.cI == -1) {
            // Si estamos sobre un operador, autocompleta con un 0 que luego pisa con el cálculo de toda la expresión hasta entonces escrita
            if(this.isBinaryOperator(this.array[this.counter])) {
                this.digitos(0)
                this.introducirNumero(this.calculoSimpleExpresion())
            }

            // Si pulsamos varias veces seguidas el =, guarda los últimos operador y operando y los calcula sobre el resultado anterior
            if(this.chainedEquals && this.lastOperator != null && this.lastOperand != null) {
                if(this.lastOperator == "+") this.suma()
                else if(this.lastOperator == "-") this.resta()
                else if(this.lastOperator == "*") this.multiplicacion()
                else if(this.lastOperator == "/") this.division()
                else if(this.lastOperator == "%") this.modulo()
                else if(this.lastOperator == "**") this.potencia()
                else if(this.lastOperator == "e") this.exponencial()
                this.introducirNumero(this.lastOperand)
            } else {
                this.lastOperator = this.array[this.counter - 1]
                this.lastOperand = this.array[this.counter]
            }

            var res = this.calculoSimpleExpresion()
            var expresion = this.pantalla

            this.pantalla = "0"
            document.getElementsByTagName("input")[0].value = this.pantalla

            var signs = this.contarSignos(expresion)
            try { this.actualizacionInterna(signs, new Number(eval(new Number(2) * signs + new Number(1)))) } catch(err) { alert("Error: " + err) }
            this.introducirNumero(res)

            this.editable = false
            this.chainedEquals = true
        }
    }

    receiveKeyPressed(e) {
        if (e == "Escape") this.borrar();
        else if(e == "1") this.digitos(1);
        else if(e == "2") this.digitos(2);
        else if(e == "3") this.digitos(3);
        else if(e == "4") this.digitos(4);
        else if(e == "5") this.digitos(5);
        else if(e == "6") this.digitos(6);
        else if(e == "7") this.digitos(7);
        else if(e == "8") this.digitos(8);
        else if(e == "9") this.digitos(9);
        else if(e == "0") this.digitos(0);
        else if(e == "," || e == ".") this.punto();
        else if(e == "+") this.suma();
        else if(e == "-") this.resta();
        else if(e == "*") this.multiplicacion();
        else if(e == "/") this.division();
        else if(e == "=") this.igual();
        else if(e == "Backspace") this.borrarDigito();
        else if(e == "c" || e == "C") this.borrarNumero();
        else if(e == "Control") this.shift();
        else if(e == "p" || e == "P") this.pi();
        else if(e == "!") this.fact();
        else if(e == "s" || e == "S") this.masMenos();
        else if(e == "(") this.parS();
        else if(e == ")") this.parE();
        else if(e == "r" || e == "R") this.raiz();
        else if(e == "%") this.modulo();
        else if(e == "l" || e == "L") this.logaritmo();
        else if(e == "e" || e == "E") this.exponencial();
        else if(e == "d" || e == "D") this.potBase10();
        else if(e == "\'") this.potencia();
        else if(e == "\"") this.potencia2();
        else if(e == "i" || e == "I") this.sinArcHyp();
        else if(e == "j" || e == "J") this.cosArcHyp();
        else if(e == "k" || e == "K") this.tanArcHyp();
        else if(e == "m" || e == "M") this.mRead();
        else if(e == ">") this.mMas();
        else if(e == "<") this.mMenos();
        else if(e == "g" || e == "G") this.mSave();
        else if(e == "b" || e == "B") this.mClear();
        else if(e == "º") this.degRad();
        else if(e == "h" || e == "H") this.hyperbolic();
        else if(e == "f" || e == "F") this.nCientif();
    }
}

var CALC = new CalculadoraCientifica();

document.addEventListener('keydown', (e) => CALC.receiveKeyPressed(e.key));
