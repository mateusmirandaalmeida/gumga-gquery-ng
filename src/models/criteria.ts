import { ComparisonOperator } from './comparison-operator';

export class Criteria {

  private field: string;
  private value: any;
  private values: Array<any>;
  private fieldFunction: string;
  private valueFunction: string;
  private comparisonOperator: string;

  private init():void {
    this.comparisonOperator = ComparisonOperator[ComparisonOperator.EQUAL];
    this.fieldFunction = "%s";
    this.valueFunction = "%s";
  }

  constructor(field: string = '1', comparisonOperator?: ComparisonOperator, value: any = '1'){
    this.init();
    this.field = field;
    this.comparisonOperator = comparisonOperator && typeof comparisonOperator == "string" ? comparisonOperator : ComparisonOperator[comparisonOperator];
    this.value = value;
  }

  public getField():string {
    return this.field;
  }

  public setField(field:string):void {
    this.field = field;
  }

  public getComparisonOperator():string {
    return this.comparisonOperator;
  }

  public setComparisonOperator(comparisonOperator: ComparisonOperator):void {
    this.comparisonOperator = ComparisonOperator[comparisonOperator];
  }

  public getValue(): any {
    return this.value;
  }

  public setValue(value: string):void {
    this.value = value;
  }

  public getValues():Array<any> {
    return this.values;
  }

  public setValues(values: Array<any>):void {
    this.values = values;
  }

  public getFieldFunction():string {
    return this.fieldFunction;
  }

  public setFieldFunction(fieldFunction:string):void {
    this.fieldFunction = fieldFunction;
  }

  public getValueFunction():string {
    return this.valueFunction;
  }

  public setValueFunction(valueFunction:string):void {
    this.valueFunction = valueFunction;
  }

}
