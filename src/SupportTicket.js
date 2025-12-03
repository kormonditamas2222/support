export class SupportTicket {
    constructor(customerName, issue, priority, createdAt) {
        if (customerName == null || issue == null) {
            throw new Error("Üres bemenet")
        }
        if (priority != "Alacsony" && priority != "Közepes" && priority != "Magas") {
            throw new Error("Helytelen priority")
        }
        if (Date(createdAt) > new Date()) {
            throw new Error("Idő a jövőben");
        }
        this.customerName = customerName;
        this.issue = issue;
        this.priority = priority;
        this.createdAt = createdAt;
    }
    toString() {
        return `${this.customerName} | ${this.issue} | ${this.priority} | ${this.createdAt.toDateString()}`
    } 
}