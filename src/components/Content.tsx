import { ReactNode } from "react";
import { cn } from "../lib/utils";

const Content = ({ children, className }: { children: ReactNode; className?: string }) => {
	return <div className={cn("px-4 lg:px-20 xl:px-44 transition-[padding] pt-6 min-h-[calc(100svh-56px)]", className)}>{children}</div>;
};

export default Content;
