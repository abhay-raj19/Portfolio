import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import playSound from '../lib/PlaySound';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';

interface BlogCardProps {
    logoUrl: string;
    altText: string;
    title: string;
    subtitle?: string;
    badges?: readonly string[];
    href?: string;
    desc: string;
    period: string;
}

export const BlogCard = ({
    logoUrl,
    altText,
    title,
    subtitle,
    href,
    badges,
    desc,
    period
}: BlogCardProps) => {
    console.log(badges);
    return (
        <Link
            target="_blank"
            href={href || '#'}
            className="block cursor-pointer"
            onClick={() => playSound('theme-audio.wav')}
        >
            <Card className="flex">
                <div className="flex-none">
                    <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
                        <AvatarImage
                            src={logoUrl}
                            alt={altText}
                            className="object-contain"
                        />
                        <AvatarFallback>{altText[0]}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex-grow ml-4 items-center flex-col group">
                    <CardHeader>
                        <div className="flex items-center justify-between gap-x-1 text-base">
                            <h3 className="inline-flex items-center  justify-center font-semibold  leading-none text-xs sm:text-sm">
                                {title}

                                {badges && (
                                    <span className="hidden md:inline-flex gap-x-1">
                                        {badges.map((badge, index) => (
                                            <Badge
                                                variant="secondary"
                                                className="align-middle md:ml-2 text-xs"
                                                key={index}
                                            >
                                                {badge}
                                            </Badge>
                                        ))}
                                    </span>
                                )}
                                <ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                            </h3>
                            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                                {period}
                            </div>
                        </div>
                        {subtitle && (
                            <div className="font-sans text-xs">{subtitle}</div>
                        )}
                    </CardHeader>

                    <CardContent className="mt-1 md:mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-300">
                        {desc}
                    </CardContent>
                </div>
            </Card>
        </Link>
    );
};
