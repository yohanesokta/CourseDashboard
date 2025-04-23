import { IconType } from "react-icons";
import { GoHome } from "react-icons/go";
import { LuUserRoundPlus } from "react-icons/lu";
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
                name: "Mentor Control",
                icons: LuUserRoundPlus,
                path : "/admin"
            }
        ],
        mentor : null
    }
}