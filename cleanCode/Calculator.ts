import ConstOperator from "./ConstOperator";

class Calculator {
    calculate(numberOne: number,
              numberTwo: number,
              operator: string) {
        switch (operator) {
            case ConstOperator.OPERATOR_ADD:
                return this.add(numberOne, numberTwo);
            case ConstOperator.OPERATOR_SUB:
                return this.sub(numberOne, numberTwo);
            case ConstOperator.OPERATOR_MUL:
                return this.multip(numberOne, numberTwo);
            case ConstOperator.OPERATOR_DIV:
                if (!this.isZero(numberTwo)) {
                    return this.div(numberOne, numberTwo);
                } else {
                    return "Can not divide by ";
                }
            default:
                return "Unsupported operation";
        }
    }

    private isZero(numberTwo: number) {
        return numberTwo == 0;
    }

    private div(numberOne: number, numberTwo: number) {
        return numberOne / numberTwo;
    }

    private multip(numberOne: number, numberTwo: number) {
        return numberOne * numberTwo;
    }

    private sub(numberOne: number, numberTwo: number) {
        return numberOne - numberTwo;
    }

    private add(numberOne: number, numberTwo: number) {
        return numberOne + numberTwo;
    }
}
/*
    - dat ten k tot -> done
    - 1 ham lam nhieu viec
    - so sanh voi string or cac gia magic
 */