// 優先順位
const priority = new Map<string, number>();
priority.set("+", 0);
priority.set("-", 0);
priority.set("×", 1);
priority.set("÷", 1);
priority.set("%", 1);
priority.set("noOperator", -1);

// 入力用のヘルパークラス
export class InputHelper {
  public static canInputOperator(str: string, char: string): boolean {
    if (char === "." && this.hasPeriod(str) === true) return false;
    return this.isOperand(str[str.length - 1]) === true;
  }
  public static canCalculate(str: string): boolean {
    return this.isOperand(str[str.length - 1]) === true;
  }
  private static hasPeriod(str: string): boolean {
    const operand = str.split(/[+|\-|×|÷|%]/g);
    return operand[operand.length - 1].includes(".");
  }
  private static isOperand(char: string): boolean {
    if (!char) return false;
    return priority.get(char) === undefined;
  }
}

// 計算用のヘルパークラス
export class OperatorHelper {
  private static trimZero(str: string): string {
    return this.trimZeroHelper(str, str.length - 1);
  }
  private static trimZeroHelper(str: string, length: number): string {
    if (
      length <= 0 ||
      (str.charAt(length) !== "0" && str.charAt(length) !== ".")
    )
      return str;
    return this.trimZeroHelper(str.substring(0, length), length - 1);
  }
  public static optimizeNumber(str: string): string {
    return str.includes(".") ? this.trimZero(str) : str;
  }
  public static operate(
    operandStack: number[],
    operatorStack: string[],
    operate: string = "noOperator"
  ): string {
    if (operatorStack.length === 0)
      return this.optimizeNumber(operandStack[0].toFixed(5));
    let ans = 0;
    while (
      operatorStack.length !== 0 &&
      priority.get(operatorStack[operatorStack.length - 1])! >=
        priority.get(operate)!
    ) {
      let num1 = operandStack.pop();
      let num2 = operandStack.pop();
      let operator = operatorStack.pop();
      if (operator === "+") ans = num2! + num1!;
      else if (operator === "-") ans = num2! - num1!;
      else if (operator === "×") ans = num2! * num1!;
      else if (operator === "÷") ans = num2! / num1!;
      else if (operator === "%") ans = num2! % num1!;
      // 計算結果をスタックに追加
      operandStack.push(ans);
    }
    return Number.isInteger(ans)
      ? ans.toString()
      : this.trimZero(ans.toFixed(5));
  }
}

export const expressionParser = (expression: string): string => {
  // stack
  let operandStack: number[] = [];
  let operatorStack: string[] = [];
  let i = 0;
  while (i < expression.length) {
    // オペランドの場合
    if (priority.get(expression.charAt(i)) === undefined) {
      let ope = "";
      let num = 0;
      while (
        priority.get(expression.charAt(i + num)) === undefined &&
        i + num < expression.length
      ) {
        ope += expression.charAt(i + num);
        num++;
      }
      operandStack.push(parseFloat(ope));
      i += num;
    } else {
      // 演算子の場合
      if (operatorStack.length === 0) {
        // 演算子スタックが空の場合は、それを演算子スタックにプッシュ
        operatorStack.push(expression.charAt(i));
      } else if (
        priority.get(operatorStack[operatorStack.length - 1])! <
        priority.get(expression.charAt(i))!
      ) {
        // 演算子スタックが空ではなく、その文字の優先順位が演算子スタックの頂上の優先順位よりも大きい場合、その文字を演算子スタックにプッシュ
        operatorStack.push(expression.charAt(i));
      } else {
        // 計算する
        OperatorHelper.operate(
          operandStack,
          operatorStack,
          expression.charAt(i)
        );
        // 計算結果をoperandStackに入れる
        operatorStack.push(expression.charAt(i));
      }
      i++;
    }
  }
  return operatorStack[0] !== null
    ? OperatorHelper.operate(operandStack, operatorStack)
    : OperatorHelper.optimizeNumber(operandStack[0].toFixed(5));
};
