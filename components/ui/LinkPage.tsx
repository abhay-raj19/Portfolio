import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/util';
interface LinkPageProps {
    children?: React.ReactNode;
    className?: string;
    onClick: () => void;
}

const LinkPage: React.FunctionComponent<LinkPageProps> = ({
    className,
    children,
    onClick
}) => {
    return (
        <div
            className={cn(
                'flex flex-row cursor-pointer items-center justify-start gap-0.5 text-base font-medium transition-all dark:text-slate-200 text-slate-800 hover:text-zinc-700 hover:gap-1 active:text-orange-500',
                className
            )}
            onClick={onClick}
        >
            <span className="link-text-content-wrapper">{children}</span>
            <ArrowUpRight className="w-4" />
        </div>
    );
};

export default LinkPage;
