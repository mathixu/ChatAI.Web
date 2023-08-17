import Image from "next/image";
import RobotIcon from "@/public/robot-icon.png";

const LogoIcon = () => {
    return (
        <div className={"flex items-center space-x-3"}>
            <Image src={RobotIcon} alt={"Robot Icon"} width={50} height={50} />
            <h1 className={"text-3xl font-bold"}>Chat AI</h1>
        </div>
    )
}

export default LogoIcon;