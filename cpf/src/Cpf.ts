export class Cpf {
    private value: string
    constructor(value: string) {
        if(!this.validate(value)) throw new Error('Invalid CPF')
        this.value = value
    }

    DIGIT_1_FACTOR = 10
    DIGIT_2_FACTOR = 11

    validate (cpf: string) {
        if (!cpf) return false;
        cpf = this.removeNonDigits(cpf)
        if (this.isValidLength(cpf)) return false
        if (this.allDigitsTheSame(cpf)) return false
        const digit1 = this.calculateDigit(cpf, this.DIGIT_1_FACTOR)
        const digit2 = this.calculateDigit(cpf, this.DIGIT_2_FACTOR)
        let checkDigit = this.extractCheckDigits(cpf)
        const calculateCheckedDigit = `${digit1}${digit2}`;  
        return checkDigit == calculateCheckedDigit;
    }
    
    removeNonDigits(cpf: string){
        return cpf.replace(/\D+/g, "")
    }
    
    isValidLength(cpf: string){
        return cpf.length !== 11
    }
    
    allDigitsTheSame(cpf: string){
        const [firstDigit] = cpf
        return cpf.split("").every(digit => digit === firstDigit)
    }
    
    calculateDigit(cpf: string, factor: number){
        let total = 0
        for(const digit of cpf){
            if(factor > 1){
                total += Number(digit) * factor--
            }
        }
        const rest = total%11
        return rest < 2 ? 0 : 11 - rest
    }
    
    extractCheckDigits(cpf: string){
        return cpf.slice(9)
    }
    getValue(){
        return this.value
    }
}