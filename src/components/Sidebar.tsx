import { TwitterIcon } from "../icons/Twittericon";
import { YoutubeIcon } from "../icons/Youtubeicon";
import { SidebarItem } from "./Sidebaritem";
import { Logo } from "../icons/Logo";

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 fixed 
    left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
        <div className="pr-2 text-purple-600">
        <Logo/>
        </div>
        Brainly
        </div>
        
    <div className="pt-8 pl-2 ">
        <SidebarItem text ="X" icon={<TwitterIcon/>} />
        <SidebarItem text ="Youtube" icon={<YoutubeIcon/>} />

    </div>
    </div>
}