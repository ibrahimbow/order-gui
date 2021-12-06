import { Address } from "./address";
import { Email } from "./email";
import { PhoneNumber } from "./phone-number";

export interface Customer{

id: string ;
firstname: string;
lastname: string;
email: Email;
address : Address;
phoneNumber: PhoneNumber;

}