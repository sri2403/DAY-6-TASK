class UberPrice {
    constructor(distance, duration, serviceType = "standard") {
        this.distance = distance;//km
        this.duration = duration;//hr
        this.serviceType = serviceType;
    }
    calculate() {
        const baseFare = this.serviceType === "Premium" ? 20 : 10;
        const distanceRate = this.serviceType === "Premium" ? 10 : 5;
        const durationRate = this.serviceType === "Premium" ? 10 : 5;

        const total = baseFare + (this.distance * distanceRate) + (this.duration * durationRate);
        return `Your Uber fare for ${this.serviceType} service is $${total.toFixed(2)}`;
    }
}
const premium = new UberPrice(10, 5, "Premium");
const standard = new UberPrice(10, 5, "Standard");
console.log(premium.calculate());
console.log(standard.calculate());

