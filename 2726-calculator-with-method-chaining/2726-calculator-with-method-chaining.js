class Calculator {
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.value += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.value -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.value *= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator|string}
     */
    divide(value) {
        if (value === 0) {
            this.value = null; 
            this.error = "Division by zero is not allowed";
        } else {
            this.value /= value;
        }
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value **= value;
        return this;
    }
    
    /** 
     * @return {number|string}
     */
    getResult() {
        if (this.value === null) return this.error;
        return this.value;
    }
}
