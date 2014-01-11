/*global describe, it, expect, stack_init, beforeEach */
describe("Stack", function () {
  var mystack;
  beforeEach(function () {
    mystack = stack_init();
  });
  it("_init should return something", function () {
    expect(typeof (stack_init())).toEqual("object");
  });
  it("should have a method is_empty", function () {
    expect(typeof (mystack.is_empty)).toEqual("function");
  });
  it(" is_empty should return true when stack is empty", function () {
    expect(mystack.is_empty()).toEqual(true);
  });
  it(" should have a method push", function () {
    expect(typeof (mystack.push)).toEqual("function");
  });
  it(" is_empty should return false if we have pushed something", function () {
    mystack.push(4);
    expect(mystack.is_empty()).toEqual(false);
  });
  it(" should have a method pop", function () {
    expect(typeof (mystack.pop)).toEqual("function");
  });
  it(" pop should return the same value that push used", function () {
    var v = 5;
    mystack.push(v);
    var m = mystack.pop();
    expect(m).toEqual(v);
  });
  it(" should be empty after push and pop", function () {
    var v = 5;
    mystack.push(v);
    var m = mystack.pop();
    expect(mystack.is_empty()).toEqual(true);
  });
});