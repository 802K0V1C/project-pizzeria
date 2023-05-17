class BaseWidget{
  constructor(wrapperElement, initialValue){
    const thisWidget = this;

    thisWidget.dom = {};
    thisWidget.dom.wrapperElement = wrapperElement;

    thisWidget.correctValue = initialValue;
  }

  get Value(){
    const thisWidget = this;

    return thisWidget.correctValue;
  }

  set Value(value){
    const thisWidget = this;

    const newValue = thisWidget.parseValue(value);
    // const minValue = settings.amountWidget.defaultMin;
    // const maxValue = settings.amountWidget.defaultMax;

    /* TODO: Add validation */
    if(newValue != thisWidget.correctValue && thisWidget.isValid(newValue)){

      //  thisWidget.correctValue !== newValue && !isNaN(newValue) && newValue >= minValue && newValue <= maxValue)
      thisWidget.correctValue = newValue;
      thisWidget.announce();
    }
    
    thisWidget.renderValue();
  }

  setValue(value){
    const thisWidget = this;

    thisWidget.value = value; 
  }

  parseValue(value){
    return parseInt(value);
  }

  isValid(value){
    return !isNaN(value);
  }

  renderValue(){
    const thisWidget = this;

    thisWidget.dom.wrapper.innerHTML = thisWidget.Value;
  }

  announce(){
    const thisWidget = this;

    const event = new CustomEvent('updated', {
      bubbles: true
    });
    thisWidget.element.dispatchEvent(event);
  }
}

export default BaseWidget;