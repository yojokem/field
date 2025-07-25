import { Entity } from "typeorm";
import { Fence } from "../../Fence";
import { Address, AddressHolder } from "../Address";

@Entity({name: "identity"})
export class Identity extends Fence implements AddressHolder {
    fullname: string;
    resiRegAbs: Address[]; //주민 등록 초본

    id() {
        return this.fid + "―" + this. + "|" + this.uid
    }
}