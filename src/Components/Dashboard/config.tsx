import { IconType } from "react-icons";
import { GoHome } from "react-icons/go";
import { LuUserRoundPlus } from "react-icons/lu";
import { RiUserSettingsLine } from "react-icons/ri";
interface EnumOptions {
    name : string,
    icons : IconType,
    path : string,
}
interface Config {
    admin : Array<EnumOptions>;
    mentor : Array<EnumOptions> | null;
}

export function DasboardConfig() : Config {
    return {
        admin :[
            {
                name: "Home",
                icons: GoHome,
                path : "/admin"
            },
            {
                name: "Mentor Creator",
                icons: LuUserRoundPlus,
                path : "/admin/mentor/create"
            },
            {
                name: "Mentor Control",
                icons: RiUserSettingsLine,
                path : "/admin/mentor"
            }
        ],
        mentor : null
    }
}