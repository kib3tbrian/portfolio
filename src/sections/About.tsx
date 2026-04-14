"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import bookImage from "@/assets/images/srimad-bhagavad-gita-cover.webp";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItemsRow } from "@/components/ToolboxItemsRow";
import { motion } from "framer-motion";
import { useMemo, useRef } from "react";
import { hobbies, toolBoxItems } from "../../profile.config";

export const AboutSection = ({ id }: { id: string }) => {
    const constraintRef = useRef(null);
    const uniqueToolboxItems = useMemo(
        () => toolBoxItems.filter((item, index, items) => items.findIndex((entry) => entry.title === item.title) === index),
        []
    );
    const secondRowItems = useMemo(() => [...uniqueToolboxItems].reverse(), [uniqueToolboxItems]);

    return (
        <div className="py-20 md:py-14 lg:py-20 lg:mt-3">
            <section className="container" id={id}>
                <SectionHeader
                    heading1="About Me"
                    heading2="I Build The Good Stuff, End to End"
                    paragraph="From slick frontends to robust backends and cloud setup, I turn ideas into products people actually enjoy using."
                />
                <div className="mt-20 flex flex-col gap-6">
                    <div className="grid gap-8 grid-cols-1 md:flex md:justify-center lg:flex lg:justify-center">
                        <Card className="min-h-[360px] pb-8 md:pb-10 p-0 md:col-span-3 lg:col-span-2 overflow-hidden">
                            <CardHeader
                                heading="Toolbox"
                                description="My stack. Ship fast, build smart, stay sturdy under pressure."
                                className="p-6 pb-0 lg:-mt-0.5 flex flex-col items-center text-center"
                            />
                            <ToolboxItemsRow
                                items={uniqueToolboxItems}
                                className="mt-4 md:mt-6"
                                itemsWrapperClassName="animate-toolbox-scroll-left [animation-duration:40s]"
                            />
                            <ToolboxItemsRow
                                items={secondRowItems}
                                className="mt-5 md:mt-6"
                                itemsWrapperClassName="animate-toolbox-scroll-right [animation-duration:40s]"
                            />
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};
